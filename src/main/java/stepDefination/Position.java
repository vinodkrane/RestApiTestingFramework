package stepDefination;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.module.jsv.JsonSchemaValidator;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import utility.UrlBuilder;

/**
 * A step definition class which stores the mapping between each step of the positions.feature scenario
 * file with a code of function to be executed.
 */
public class Position {

	Response response;

	// **********************************************************************************************************
	// Test scenario 1:
	// Return the satellite information as default unit.
	// **********************************************************************************************************

	@Given("^a base uri$")
	public void test_001_a_uri() {
		// Specify the base URL to the RESTful web service
		RestAssured.baseURI = UrlBuilder.getBasePath();
	}

	@When("^a get request is sent to the API with following parameters$")
	public void test_002_get_request_is_sent_to_the_API_with_following_parameters(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp));
	}

	@Then("^API returns a response with response code (\\d+)$")
	public void test_003_api_returns_a_response_with_response_code(int statusCode) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}

	@Then("^response content-type is listed as 'application/json'$")
	public void test_004_response_content_type_is_application_json() {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains("application/json"));
	}

	@Then("^response array contains object with following values$")
	public void test_005_response_array_contains_object_with_following_values(DataTable datatable) throws Throwable {
        JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj = jsonArray.getJSONObject(0);
		
		// Assert that correct JSON is returned
		List<List<String>> data = datatable.raw();
		Assert.assertEquals(data.get(1).get(0), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("latitude").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("longitude").toString());
		Assert.assertEquals((data.get(1).get(3)).toString(), obj.get("altitude").toString());
		Assert.assertEquals((data.get(1).get(4)).toString(), obj.get("velocity").toString());
		Assert.assertEquals((data.get(1).get(5)).toString(), obj.get("units").toString());
	}

	
	// **********************************************************************************************************
	// Test scenario 2:
	// Return the satellite data when the requested unit is kilometers
	// **********************************************************************************************************
	
	@When("^a get request is sent to the API with the requested unit is kilometers$")
	public void test_006_getrequest_is_sent_to_the_API_with_following_parameters(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);
		String units = data.get(1).get(2);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp, units));
	}

	@Then("^API returns a HTTP response with response code (\\d+)$")
	public void test_007_api_returns_a_response_with_response_code(int statusCode) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(response.getStatusCode(), statusCode);
	}

	@Then("^response content-type is 'application/json'$")
	public void test_008_response_content_type_is_application_json() {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains("application/json"));
	}

	@Then("^response array contains satellite details$")
	public void test_009_response_array_contains_object_with_following_values(DataTable datatable1) throws Throwable {
        JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj = jsonArray.getJSONObject(0);

		// Assert that correct JSON is returned
		List<List<String>> data = datatable1.raw();
		Assert.assertEquals(data.get(1).get(0), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("latitude").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("longitude").toString());
		Assert.assertEquals((data.get(1).get(3)).toString(), obj.get("altitude").toString());
		Assert.assertEquals((data.get(1).get(4)).toString(), obj.get("velocity").toString());
		Assert.assertEquals((data.get(1).get(5)).toString(), obj.get("units").toString());
	}
	
	
	// **********************************************************************************************************
	// Test scenario 3:
	// Return the satellite data when the requested unit is miles
	// **********************************************************************************************************
	@When("^a get request is sent to the API with the requested unit is miles$")
	public void test_010_getrequest_is_sent_to_the_API_with_the_requested_unit_miles_010(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);
		String units = data.get(1).get(2);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp, units));
	}

	@Then("^API returns response with response code (\\d+)$")
	public void test_011_api_returns_response_with_response_code_011(int arg1) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^response has content-type as 'application/json'$")
	public void test_012_response_has_content_type_as_application_json() {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains("application/json"));
	}

	@Then("^response array contains detailed satellite information$")
	public void test_013_response_array_contains_detailed_satellite_information(DataTable datatable1) throws Throwable {
        JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj = jsonArray.getJSONObject(0);

		// Assert that correct JSON is returned
		List<List<String>> data = datatable1.raw();
		Assert.assertEquals(data.get(1).get(0), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("latitude").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("longitude").toString());
		Assert.assertEquals((data.get(1).get(3)).toString(), obj.get("altitude").toString());
		Assert.assertEquals((data.get(1).get(4)).toString(), obj.get("velocity").toString());
		Assert.assertEquals((data.get(1).get(5)).toString(), obj.get("units").toString());
	}
	
	
	// **********************************************************************************************************
	// Test scenario 4:
	// Return the satellite data for multiple timestamps.
	// **********************************************************************************************************
	@When("^a get request is sent to the API with multiple timestamps$")
	public void test_014_getrequest_is_sent_to_the_API_with_multiple_timestamps(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);
		String units = data.get(1).get(2);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Assert that correct JSON is returned
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp, units));
	}

	@Then("^API returns response (\\d+)$")
	public void test_015_api_returns_response(int arg1) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^response has content-type 'application/json'$")
	public void test_016_response_has_content_type_application_json() {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains("application/json"));
	}

	@Then("^response array contains satellite information for two timestamps$")
	public void test_017_response_array_contains_sattellite_information_for_two_timestamps(DataTable datatable1) throws Throwable {
		List<List<String>> data = datatable1.raw();

		// Assert that correct JSON is returned
		JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj ;
        int index = 0;
        
        for (int i = 1; i <= jsonArray.length(); i++, index++) {
			obj = jsonArray.getJSONObject(index);
        	Assert.assertEquals(data.get(i).get(0), obj.get("id").toString());
    		Assert.assertEquals((data.get(i).get(1)).toString(), obj.get("latitude").toString());
    		Assert.assertEquals((data.get(i).get(2)).toString(), obj.get("longitude").toString());
    		Assert.assertEquals((data.get(i).get(3)).toString(), obj.get("altitude").toString());
    		Assert.assertEquals((data.get(i).get(4)).toString(), obj.get("velocity").toString());
		}
	}
	
	
	// **********************************************************************************************************
	// Test scenario 5:
	// Return HTTP error 400 if timestamp is not found.
	// **********************************************************************************************************
	@When("^a get request is sent to the API with invalid timestamps$")
	public void test_018_getrequest_is_sent_to_the_API_with_invalid_timestamps(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp));
	}
	
	@Then("^API returns HTTP response code (\\d+)$")
	public void test_019_api_returns_HTTP_response_code(int arg1) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(400, response.getStatusCode());
	}
	

	// **********************************************************************************************************
	// Test scenario 6:
	// Return HTTP error 404 if id is not found.
	// **********************************************************************************************************
	@When("^a get request is sent to the API with invalid id$")
	public void test_020_getrequest_is_sent_to_the_API_with_invalid_timestamps(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp));
	}
	
	@Then("^API returns HTTP error code (\\d+)$")
	public void test_021_api_returns_HTTP_response_code(int arg1) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(404, response.getStatusCode());
	}
	
	
	// **********************************************************************************************************
	// Test scenario 7:
	// Return the satellite information as default unit when invalid unit is provided.
	// **********************************************************************************************************

	@When("^a get request is sent to the API with invalid unit$")
	public void test_022_getrequest_is_sent_to_the_API_with_invalid_unit(DataTable datatable) {
		// Read test data
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);
		String units = data.get(1).get(2);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp,units));
	}

	@Then("^API returns a response code (\\d+)$")
	public void test_023_api_returns_a_response_code(int arg1) {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(200, response.getStatusCode());
	}

	@Then("^response array contains object with units kilometers$")
	public void test_024_response_array_contains_object_with_units_kelometers(DataTable datatable1) throws Throwable {
        JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj = jsonArray.getJSONObject(0);

		// Assert that correct JSON is returned
		List<List<String>> data = datatable1.raw();
		Assert.assertEquals(data.get(1).get(0), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("units").toString());
	}
	

	// **********************************************************************************************************
	// Test scenario 8:
	// JSON response schema validation.
	// **********************************************************************************************************

	@When("^a get request with valid parameters$")
	public void test_025_get_request_with_valid_parameters(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);

		// Get the RequestSpecification of the request
		RestAssured.baseURI = UrlBuilder.getBasePath();
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp));
	}

	@Then("^API returns valid json$")
	public void test_026_response_array_contains_object_with_following_values() throws Throwable {
        response.then().assertThat().body(JsonSchemaValidator.matchesJsonSchemaInClasspath("positions_schema.json"));
	}
	
	
	// **********************************************************************************************************
	// Test scenario 9:
	// Return the satellite data for more than ten timestamps.
	// **********************************************************************************************************

	@When("^a get request is sent to the API with more than ten timestamps$")
	public void test_027_a_get_request_is_sent_to_API_with_more_than_ten_timestamps(DataTable datatable) {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();
		String id = data.get(1).get(0);
		String timestamp = data.get(1).get(1);

		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server
		response = httpRequest.request(Method.GET, UrlBuilder.getPositionPath(id, timestamp));
	}

	@Then("^response has error if parameter count is more than maximum length defined$")
	public void test_028_http_response_has_error() throws Throwable {
        JSONArray jsonArray = new JSONArray(response.getBody().asString());
        JSONObject obj = jsonArray.getJSONObject(0);
		Assert.assertTrue("The timestamps inputs more than 10 are not allowed", obj.length() < 10);
	}
}