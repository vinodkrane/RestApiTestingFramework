# Java based RestApi Testing Framework - BDD
## _Vinod Rane_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is a sample Rest API test solution for sample endpoints. Tests are written using a combination of CucumberBDD, RestAssured, Junit & Maven.

## Framework Specifications
1. The test design is based on the concept of AAA design pattern (Arrange Act Assert).
2. Tests are written in BDD Gherkin format in Cucumber feature files and it is represented as a living documentation in the test report.
3. API calls & validations are made using RestAssured.
4. This solution maps the Gherkin sentences to Java methods with the so-called Step Definition files. 
5. Environment variables are included in JSON files. In real time projects each environment can be configured with its baseurl to run the tests based on different environments.

## Requirements
1. Java 8
2. Maven
3. Cucumber
4. RestAssured
5. Java IDE: intellij or eclipse.

## Project structure

```sh
├───config
├───resources
├───src
│   ├───main
│   │   └───java
│   │       ├───feature
│   │       ├───stepDefination
│   │       └───utility
│   └───test
│       └───java
│           └───testRunner
└───target
       └───cucumber
              └─── index.html
```

1. src/main/java/feature - Cucumber features files describes test scenarios
2. src/main/java/stepDefination - Cucumber step defination classes
3. src/main/java/utility - Utility classes
4. src/test/java/testRunner - Cucumber test runner junit class
5. target/cucumber - Reports

## Getting Started
1. Clone the project.
2. Make sure project name is same as repository name.
3. Add Maven support to IDE.
4. Maven will automatically downloads all the required dependency jars into the local repository.
5. Install cucumber plugin to highlight the Gherkins syntax.

## Running test
1. cd $project_directory
2. Open command prompt/terminal
3. Clean project
    ```sh
    mvn clean
    ```
3. Run tests
    ```sh
    mvn test
    ```

## Results
1. Results can be viewed on console.
2. HTML reports are recorded at RestApiTestingFramework/target/cucumber/index.html
3. Reports can be extended using any third party tool.

## Tests automated
satellites/[id]/positions
1. Return the satellite information as default unit.
2. Return the satellite data when the requested unit is kilometers.
3. Return the satellite data when the requested unit is miles.
4. Return the satellite data for multiple timestamps.
5. Return HTTP error 400 if timestamp is not found.
6. Return HTTP error 404 if id is not found.
7. Return the satellite information as default unit when invalid unit is provided.
8. JSON response schema validation.
9. Return the satellite data for more than ten timestamps.

satellites/[id]/tles
1. Return the TLE data in default format
2. Return the TLE data in JSON format when JSON format is requested
3. Return the TLE data in text format when text format is requested
4. Return the TLE data in default format when format provided is invalid
5. Return HTTP error 404 if id is not found.
6. JSON response schema validation

## Writing test cases
1. The existing test cases are located at src/main/java/feature
2. The cucumber features goes in the features library and should have the ".feature" extension. 
3. You can start out by looking at them. 

## Application under test
A site for tracking the location of and getting fly-over notifications for the International Space Station.
https://api.wheretheiss.at/v1/satellites/

## Contribution
1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'feature details'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## References
1. Rest Assured - for write RESTful APIs tests( http://rest-assured.io/)
2. Cucumber for BDD design https://cucumber.io
3. Cucumber-JUnit as Test Runner https://cucumber.io/docs/installation/java/
4. Maven - https://maven.apache.org/
