Feature: Return the TLE data for a given satellite in either json or text format

  #Scenario 10:
  @smoke_test
  Scenario: Return the TLE data in default format
    Given a base uri to execute request
    When a get request is sent to the API with id "25544"
    Then HTTP return code is "200"
    And response content-type is "application/json"
    And response contains following fields
      | id    | name | header      |
      | 25544 | iss  | ISS (ZARYA) |


  #Scenario 11:
  @regression_test
  Scenario: Return the TLE data in JSON format when JSON format is requested
    When a get request is sent to the API with id "25544" and format "json"
    Then HTTP success status response code is "200"
    And the content-type is "application/json"
    And response contains following fields as output
      | id    | name | header      |
      | 25544 | iss  | ISS (ZARYA) |


  #Scenario 12:
  @regression_test
  Scenario: Return the TLE data in text format when text format is requested
    When a get request is sent to the API with id "25544" and text format "text"
    Then HTTP response code returned is "200"
    And response content-type text is "text/plain"
    And response contains following output data
      | id    | header      |
      | 25544 | ISS (ZARYA) |
      
 
  #Scenario 13:
  @regression_test
  Scenario: Return the TLE data in default format when format provided is invalid
    When a get request is sent to the API with invalid id "25544" and format "invalid"
    Then HTTP success status response code returned "200"
    And the content-type returned is "application/json"
    And response has following output fields
      | id    | name | header      |
      | 25544 | iss  | ISS (ZARYA) |
      
      
 #Scenario 14:
  @regression_test
  Scenario: Return HTTP error 404 if id is not found.
    When a get request is sent to the API with incorrect or invalid id "87893"
    Then HTTP error code is reported "404"


  #Scenario 15:
  @regression_test
	Scenario: JSON response schema validation
	When a valid get request is sent to the API with id "25544" and format "json"
	Then API returns valid json file
