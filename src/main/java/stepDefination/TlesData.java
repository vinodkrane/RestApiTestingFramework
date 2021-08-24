package stepDefination;
import java.net.URL;
import java.util.List;
import org.json.JSONException;
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
 * A step definition class which stores the mapping between each step of the tles.feature scenario
 * file with a code of function to be executed.
 */
public class TlesData {

	String uri;
	public URL url;
	public String id;
	public String timestamp;
	Response response;

	// **********************************************************************************************************
	// Test scenario 10:
	// Return the TLE data in default format
	// **********************************************************************************************************

	@Given("^a base uri to execute request$")
	public void test_029_a_base_uri_to_execute_request() throws Throwable {
		// Specify the base URL to the RESTful web service
		RestAssured.baseURI = UrlBuilder.getBasePath();
	}

	@When("^a get request is sent to the API with id \"([^\"]*)\"$")
	public void test_030_a_get_request_is_sent_to_the_API_with_id(String id) throws Throwable {
		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id));
	}

	@Then("^HTTP return code is \"([^\"]*)\"$")
	public void est_031_ttp_return_code_is(int statusCode) throws Throwable {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}

	@Then("^response content-type is \"([^\"]*)\"$")
	public void test_032_response_content_type_is(String contentType) throws Throwable {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains(contentType));
	}

	@Then("^response contains following fields$")
	public void test_033_response_contains_following_fields(DataTable datatable) throws Throwable {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();

		String body = response.getBody().asString();
		JSONObject obj = new JSONObject(body);

		// Assert that correct JSON is returned.
		Assert.assertEquals((data.get(1).get(0)).toString(), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("name").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("header").toString());
	}

	// **********************************************************************************************************
	// Test scenario 11:
	// Return the TLE data in JSON format when JSON format is requested
	// **********************************************************************************************************

	@When("^a get request is sent to the API with id \"([^\"]*)\" and format \"([^\"]*)\"$")
	public void test_034_a_get_request_is_sent_to_the_API_with_id_and_format(String id, String format) {
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id, format));
	}

	@Then("^HTTP success status response code is \"([^\"]*)\"$")
	public void test_035_http_success_return_code(int statusCode) throws Throwable {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}

	@Then("^the content-type is \"([^\"]*)\"$")
	public void test_036_content_type_is_application_json(String contentType) {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains(contentType));
	}

	@Then("^response contains following fields as output$")
	public void test_037_response_contains_following_fields_as_output(DataTable datatable) throws JSONException {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();

		String body = response.getBody().asString();
		JSONObject obj = new JSONObject(body);

		// Assert results
		Assert.assertEquals((data.get(1).get(0)).toString(), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("name").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("header").toString());
	}

	// **********************************************************************************************************
	// Test scenario 12:
	// Return the TLE data in text format when text format is requested
	// **********************************************************************************************************

	@When("^a get request is sent to the API with id \"([^\"]*)\" and text format \"([^\"]*)\"$")
	public void test_038_a_get_request_is_sent_to_the_API_with_id_and_text_format(String id, String format) {
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id, format));
	}

	@Then("^HTTP response code returned is \"([^\"]*)\"$")
	public void test_039_http_success_return_code(int statusCode) throws Throwable {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}

	@Then("^response content-type text is \"([^\"]*)\"$")
	public void test_040_responce_content_type_text_is(String contentType) {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains(contentType));
	}

	@Then("^response contains following output data$")
	public void  test_041_response_content_type_is(DataTable datatable) throws JSONException {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();

		String body = response.getBody().asString();

		// Assert that correct JSON is returned.
		Assert.assertTrue(body.contains((data.get(1).get(0)).toString()));
		Assert.assertTrue(body.contains((data.get(1).get(1)).toString()));
	}
	

	// **********************************************************************************************************
	// Test scenario 13:
	// Return the TLE data in default format when format provided is invalid
	// **********************************************************************************************************

	@When("^a get request is sent to the API with invalid id \"([^\"]*)\" and format \"([^\"]*)\"$")
	public void test_042_a_get_request_is_sent_to_the_API_with_invalid_id_and_format(String id, String format) {
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id, format));
	}

	@Then("^HTTP success status response code returned \"([^\"]*)\"$")
	public void test_043_http_success_return_code(int statusCode) throws Throwable {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}

	@Then("^the content-type returned is \"([^\"]*)\"$")
	public void test_044_content_type_returned_is_json(String contentType) {
		// Assert that correct HTTP header is returned.
		Assert.assertTrue(response.header("Content-Type").contains(contentType));
	}

	@Then("^response has following output fields$")
	public void test_045_response_contains_following_output_field(DataTable datatable) throws JSONException {
		// Read test data from datatable
		List<List<String>> data = datatable.raw();

		String body = response.getBody().asString();
		JSONObject obj = new JSONObject(body);

		// Assert that correct JSON is returned.
		Assert.assertEquals((data.get(1).get(0)).toString(), obj.get("id").toString());
		Assert.assertEquals((data.get(1).get(1)).toString(), obj.get("name").toString());
		Assert.assertEquals((data.get(1).get(2)).toString(), obj.get("header").toString());
	}
	
	
	// **********************************************************************************************************
	// Test scenario 14:
	// Return the TLE data in JSON format as the default.
	// **********************************************************************************************************

	@When("^a get request is sent to the API with incorrect or invalid id \"([^\"]*)\"$")
	public void test_046_a_get_request_with_incorrect_or_invalid_id(String id) throws Throwable {
		// Specify the base URL to the RESTful web service
		RestAssured.baseURI = UrlBuilder.getBasePath();
		
		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id));
	}

	@Then("^HTTP error code is reported \"([^\"]*)\"$")
	public void test_047_the_error_return_code_is(int statusCode) throws Throwable {
		// Assert that correct HTTP status code is returned.
		Assert.assertEquals(statusCode, response.getStatusCode());
	}
	
	
	// **********************************************************************************************************
	// Test scenario 15:
	// RJSON Schema validation.
	// **********************************************************************************************************

	@When("^a valid get request is sent to the API with id \"([^\"]*)\" and format \"([^\"]*)\"$")
	public void test_052_a_valid_get_request_is_sent_to_the_API_with_id(String id, String format) throws Throwable {
		// Get the RequestSpecification of the request
		RequestSpecification httpRequest = RestAssured.given();

		// Response from the server.
		response = httpRequest.request(Method.GET, UrlBuilder.getTlePath(id,format));
	}


	@Then("^API returns valid json file$")
	public void test_054_response_contains_following_fields() throws Throwable {
        response.then().assertThat().body(JsonSchemaValidator.matchesJsonSchemaInClasspath("tles_schema.json"));
	}
}
