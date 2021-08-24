Feature: Test position, velocity, and other related information about a satellite.

#Scenario 1:
@smoke_test
Scenario: Return the satellite information as default unit.
Given a base uri
When a get request is sent to the API with following parameters
      | id    | timestamps |
      | 25544 | 1436029902 |
Then API returns a response with response code 200
And response content-type is 'application/json'
And response array contains object with following values
      | id    | latitude         |  longitude      | altitude        | velocity        | units      |
      | 25544 | -25.344256596171 | 18.04663730318  | 408.02146112959 | 27597.437444347 | kilometers |
      

#Scenario 2:  
@regression_test
Scenario: Return the satellite data when the requested unit is kilometers.
When a get request is sent to the API with the requested unit is kilometers
      | id    | timestamps | units |
      | 25544 | 1436029892 | kilometers |
Then API returns a HTTP response with response code 200
And response content-type is listed as 'application/json'
And response array contains satellite details
      | id    | latitude         |  longitude      | altitude       | velocity        | units      |
      | 25544 | -24.870147579366 | 17.59950771856  | 407.8263965908 | 27597.931157627 | kilometers |
      
      
#Scenario 3:
@regression_test
Scenario: Return the satellite data when the requested unit is miles.
When a get request is sent to the API with the requested unit is miles
      | id    | timestamps | units |
      | 25544 | 1436029902 | miles |
Then API returns response with response code 200
And response has content-type as 'application/json'
And response array contains detailed satellite information
      | id    | latitude         |  longitude      | altitude       | velocity        | units |
      | 25544 | -25.344256596171 | 18.04663730318  | 253.53270332355| 17148.247302231 | miles |
      
      
#Scenario 4:
@regression_test
Scenario: Return the satellite data for multiple timestamps.
When a get request is sent to the API with multiple timestamps
      | id    | timestamps 						| units |
      | 25544 | 1436029892,1436029902 | kilometers |
Then API returns response 200
And response has content-type 'application/json'
And response array contains satellite information for two timestamps
      | id    | latitude         |  longitude      | altitude       | velocity        |
      | 25544 | -24.870147579366 | 17.59950771856  | 407.8263965908 | 27597.931157627 |      
      | 25544 | -25.344256596171 | 18.04663730318  | 408.02146112959| 27597.437444347 |
   
   
#Scenario 5:
@regression_test
Scenario: Return HTTP error 400 if timestamp is not found.
When a get request is sent to the API with invalid timestamps
      | id    | timestamps |
      | 25544 | 1436A29892 | 
Then API returns HTTP response code 400


#Scenario 6:
@regression_test
Scenario: Return HTTP error 404 if id is not found.
When a get request is sent to the API with invalid id
      | id    | timestamps |
      | 99344 | 1436029902 | 
Then API returns HTTP error code 404


#Scenario 7:
@regression_test
Scenario: Return the satellite information as default unit when invalid unit is provided.
When a get request is sent to the API with invalid unit
      | id    | timestamps | units 			|
      | 25544 | 1436029892 | centimeters|
Then API returns a response code 200
And response array contains object with units kilometers
      | id    | units      |
      | 25544 | kilometers |
      
      
#Senario 8:
@regression_test
Scenario: JSON response schema validation
When a get request with valid parameters
      | id    | timestamps |
      | 25544 | 1436029902 |
Then API returns valid json
      
      
#Scenario 9:
@regression_test
Scenario: Return the satellite data for more than ten timestamps
When a get request is sent to the API with more than ten timestamps
      | id    | timestamps 																																																																								|
      | 25544 | 1436029892,1436029902,1436029834,1436029965,1436029844,1436029932,1436029887,1436029934,1436029543,1436029765,1436029544,1436024321,1436025876,1436021987 |
And response has error if parameter count is more than maximum length defined
