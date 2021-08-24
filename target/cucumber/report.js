$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("positions.feature");
formatter.feature({
  "line": 1,
  "name": "Test position, velocity, and other related information about a satellite.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario 1:"
    }
  ],
  "line": 5,
  "name": "Return the satellite information as default unit.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-information-as-default-unit.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke_test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a base uri",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a get request is sent to the API with following parameters",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps"
      ],
      "line": 8
    },
    {
      "cells": [
        "25544",
        "1436029902"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "API returns a response with response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "response content-type is \u0027application/json\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "response array contains object with following values",
  "rows": [
    {
      "cells": [
        "id",
        "latitude",
        "longitude",
        "altitude",
        "velocity",
        "units"
      ],
      "line": 13
    },
    {
      "cells": [
        "25544",
        "-25.344256596171",
        "18.04663730318",
        "408.02146112959",
        "27597.437444347",
        "kilometers"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_001_a_uri()"
});
formatter.result({
  "duration": 911754500,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_002_get_request_is_sent_to_the_API_with_following_parameters(DataTable)"
});
formatter.result({
  "duration": 5721932200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 42
    }
  ],
  "location": "Position.test_003_api_returns_a_response_with_response_code(int)"
});
formatter.result({
  "duration": 3571900,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_008_response_content_type_is_application_json()"
});
formatter.result({
  "duration": 210000,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_005_response_array_contains_object_with_following_values(DataTable)"
});
formatter.result({
  "duration": 25483300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 17,
      "value": "#Scenario 2:"
    }
  ],
  "line": 19,
  "name": "Return the satellite data when the requested unit is kilometers.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-data-when-the-requested-unit-is-kilometers.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "a get request is sent to the API with the requested unit is kilometers",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps",
        "units"
      ],
      "line": 21
    },
    {
      "cells": [
        "25544",
        "1436029892",
        "kilometers"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "API returns a HTTP response with response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "response content-type is listed as \u0027application/json\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "response array contains satellite details",
  "rows": [
    {
      "cells": [
        "id",
        "latitude",
        "longitude",
        "altitude",
        "velocity",
        "units"
      ],
      "line": 26
    },
    {
      "cells": [
        "25544",
        "-24.870147579366",
        "17.59950771856",
        "407.8263965908",
        "27597.931157627",
        "kilometers"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_006_getrequest_is_sent_to_the_API_with_following_parameters(DataTable)"
});
formatter.result({
  "duration": 2356286300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 47
    }
  ],
  "location": "Position.test_007_api_returns_a_response_with_response_code(int)"
});
formatter.result({
  "duration": 123200,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_004_response_content_type_is_application_json()"
});
formatter.result({
  "duration": 45000,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_009_response_array_contains_object_with_following_values(DataTable)"
});
formatter.result({
  "duration": 1868600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 30,
      "value": "#Scenario 3:"
    }
  ],
  "line": 32,
  "name": "Return the satellite data when the requested unit is miles.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-data-when-the-requested-unit-is-miles.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "a get request is sent to the API with the requested unit is miles",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps",
        "units"
      ],
      "line": 34
    },
    {
      "cells": [
        "25544",
        "1436029902",
        "miles"
      ],
      "line": 35
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "API returns response with response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "response has content-type as \u0027application/json\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "response array contains detailed satellite information",
  "rows": [
    {
      "cells": [
        "id",
        "latitude",
        "longitude",
        "altitude",
        "velocity",
        "units"
      ],
      "line": 39
    },
    {
      "cells": [
        "25544",
        "-25.344256596171",
        "18.04663730318",
        "253.53270332355",
        "17148.247302231",
        "miles"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_010_getrequest_is_sent_to_the_API_with_the_requested_unit_miles_010(DataTable)"
});
formatter.result({
  "duration": 1636461500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 40
    }
  ],
  "location": "Position.test_011_api_returns_response_with_response_code_011(int)"
});
formatter.result({
  "duration": 74000,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_012_response_has_content_type_as_application_json()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_013_response_array_contains_detailed_satellite_information(DataTable)"
});
formatter.result({
  "duration": 895600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#Scenario 4:"
    }
  ],
  "line": 45,
  "name": "Return the satellite data for multiple timestamps.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-data-for-multiple-timestamps.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "a get request is sent to the API with multiple timestamps",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps",
        "units"
      ],
      "line": 47
    },
    {
      "cells": [
        "25544",
        "1436029892,1436029902",
        "kilometers"
      ],
      "line": 48
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "API returns response 200",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "response has content-type \u0027application/json\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "response array contains satellite information for two timestamps",
  "rows": [
    {
      "cells": [
        "id",
        "latitude",
        "longitude",
        "altitude",
        "velocity"
      ],
      "line": 52
    },
    {
      "cells": [
        "25544",
        "-24.870147579366",
        "17.59950771856",
        "407.8263965908",
        "27597.931157627"
      ],
      "line": 53
    },
    {
      "cells": [
        "25544",
        "-25.344256596171",
        "18.04663730318",
        "408.02146112959",
        "27597.437444347"
      ],
      "line": 54
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_014_getrequest_is_sent_to_the_API_with_multiple_timestamps(DataTable)"
});
formatter.result({
  "duration": 2434377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "Position.test_015_api_returns_response(int)"
});
formatter.result({
  "duration": 96500,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_016_response_has_content_type_application_json()"
});
formatter.result({
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_017_response_array_contains_sattellite_information_for_two_timestamps(DataTable)"
});
formatter.result({
  "duration": 807700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#Scenario 5:"
    }
  ],
  "line": 59,
  "name": "Return HTTP error 400 if timestamp is not found.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-http-error-400-if-timestamp-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "a get request is sent to the API with invalid timestamps",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps"
      ],
      "line": 61
    },
    {
      "cells": [
        "25544",
        "1436A29892"
      ],
      "line": 62
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "API returns HTTP response code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "Position.test_018_getrequest_is_sent_to_the_API_with_invalid_timestamps(DataTable)"
});
formatter.result({
  "duration": 1747045000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 31
    }
  ],
  "location": "Position.test_019_api_returns_HTTP_response_code(int)"
});
formatter.result({
  "duration": 64700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 66,
      "value": "#Scenario 6:"
    }
  ],
  "line": 68,
  "name": "Return HTTP error 404 if id is not found.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-http-error-404-if-id-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "a get request is sent to the API with invalid id",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps"
      ],
      "line": 70
    },
    {
      "cells": [
        "99344",
        "1436029902"
      ],
      "line": 71
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "API returns HTTP error code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "Position.test_020_getrequest_is_sent_to_the_API_with_invalid_timestamps(DataTable)"
});
formatter.result({
  "duration": 2986978000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 28
    }
  ],
  "location": "Position.test_021_api_returns_HTTP_response_code(int)"
});
formatter.result({
  "duration": 80500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 75,
      "value": "#Scenario 7:"
    }
  ],
  "line": 77,
  "name": "Return the satellite information as default unit when invalid unit is provided.",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-information-as-default-unit-when-invalid-unit-is-provided.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "a get request is sent to the API with invalid unit",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps",
        "units"
      ],
      "line": 79
    },
    {
      "cells": [
        "25544",
        "1436029892",
        "centimeters"
      ],
      "line": 80
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "API returns a response code 200",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "response array contains object with units kilometers",
  "rows": [
    {
      "cells": [
        "id",
        "units"
      ],
      "line": 83
    },
    {
      "cells": [
        "25544",
        "kilometers"
      ],
      "line": 84
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_022_getrequest_is_sent_to_the_API_with_invalid_unit(DataTable)"
});
formatter.result({
  "duration": 2510852700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 28
    }
  ],
  "location": "Position.test_023_api_returns_a_response_code(int)"
});
formatter.result({
  "duration": 181600,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_024_response_array_contains_object_with_units_kelometers(DataTable)"
});
formatter.result({
  "duration": 1251800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 87,
      "value": "#Senario 8:"
    }
  ],
  "line": 89,
  "name": "JSON response schema validation",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;json-response-schema-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 90,
  "name": "a get request with valid parameters",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps"
      ],
      "line": 91
    },
    {
      "cells": [
        "25544",
        "1436029902"
      ],
      "line": 92
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "API returns valid json",
  "keyword": "Then "
});
formatter.match({
  "location": "Position.test_025_get_request_with_valid_parameters(DataTable)"
});
formatter.result({
  "duration": 1813987300,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_026_response_array_contains_object_with_following_values()"
});
formatter.result({
  "duration": 703526700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 96,
      "value": "#Scenario 9:"
    }
  ],
  "line": 98,
  "name": "Return the satellite data for more than ten timestamps",
  "description": "",
  "id": "test-position,-velocity,-and-other-related-information-about-a-satellite.;return-the-satellite-data-for-more-than-ten-timestamps",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "a get request is sent to the API with more than ten timestamps",
  "rows": [
    {
      "cells": [
        "id",
        "timestamps"
      ],
      "line": 100
    },
    {
      "cells": [
        "25544",
        "1436029892,1436029902,1436029834,1436029965,1436029844,1436029932,1436029887,1436029934,1436029543,1436029765,1436029544,1436024321,1436025876,1436021987"
      ],
      "line": 101
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 102,
  "name": "response has error if parameter count is more than maximum length defined",
  "keyword": "And "
});
formatter.match({
  "location": "Position.test_027_a_get_request_is_sent_to_API_with_more_than_ten_timestamps(DataTable)"
});
formatter.result({
  "duration": 8215330700,
  "status": "passed"
});
formatter.match({
  "location": "Position.test_028_http_response_has_error()"
});
formatter.result({
  "duration": 347339100,
  "error_message": "java.lang.AssertionError: The timestamps inputs more than 10 are not allowed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat stepDefination.Position.test_028_http_response_has_error(Position.java:363)\r\n\tat ✽.And response has error if parameter count is more than maximum length defined(positions.feature:102)\r\n",
  "status": "failed"
});
formatter.uri("tles.feature");
formatter.feature({
  "line": 1,
  "name": "Return the TLE data for a given satellite in either json or text format",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario 10:"
    }
  ],
  "line": 5,
  "name": "Return the TLE data in default format",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;return-the-tle-data-in-default-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke_test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "a base uri to execute request",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a get request is sent to the API with id \"25544\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "HTTP return code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response content-type is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "response contains following fields",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "header"
      ],
      "line": 11
    },
    {
      "cells": [
        "25544",
        "iss",
        "ISS (ZARYA)"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TlesData.test_029_a_base_uri_to_execute_request()"
});
formatter.result({
  "duration": 716600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25544",
      "offset": 42
    }
  ],
  "location": "TlesData.test_030_a_get_request_is_sent_to_the_API_with_id(String)"
});
formatter.result({
  "duration": 2737607600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TlesData.est_031_ttp_return_code_is(int)"
});
formatter.result({
  "duration": 235500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 26
    }
  ],
  "location": "TlesData.test_032_response_content_type_is(String)"
});
formatter.result({
  "duration": 184600,
  "status": "passed"
});
formatter.match({
  "location": "TlesData.test_033_response_contains_following_fields(DataTable)"
});
formatter.result({
  "duration": 899300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#Scenario 11:"
    }
  ],
  "line": 17,
  "name": "Return the TLE data in JSON format when JSON format is requested",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;return-the-tle-data-in-json-format-when-json-format-is-requested",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a get request is sent to the API with id \"25544\" and format \"json\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "HTTP success status response code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the content-type is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "response contains following fields as output",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "header"
      ],
      "line": 22
    },
    {
      "cells": [
        "25544",
        "iss",
        "ISS (ZARYA)"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "25544",
      "offset": 42
    },
    {
      "val": "json",
      "offset": 61
    }
  ],
  "location": "TlesData.test_034_a_get_request_is_sent_to_the_API_with_id_and_format(String,String)"
});
formatter.result({
  "duration": 3134604000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "TlesData.test_035_http_success_return_code(int)"
});
formatter.result({
  "duration": 134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 21
    }
  ],
  "location": "TlesData.test_036_content_type_is_application_json(String)"
});
formatter.result({
  "duration": 87800,
  "status": "passed"
});
formatter.match({
  "location": "TlesData.test_037_response_contains_following_fields_as_output(DataTable)"
});
formatter.result({
  "duration": 337400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#Scenario 12:"
    }
  ],
  "line": 28,
  "name": "Return the TLE data in text format when text format is requested",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;return-the-tle-data-in-text-format-when-text-format-is-requested",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "a get request is sent to the API with id \"25544\" and text format \"text\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "HTTP response code returned is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "response content-type text is \"text/plain\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "response contains following output data",
  "rows": [
    {
      "cells": [
        "id",
        "header"
      ],
      "line": 33
    },
    {
      "cells": [
        "25544",
        "ISS (ZARYA)"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "25544",
      "offset": 42
    },
    {
      "val": "text",
      "offset": 66
    }
  ],
  "location": "TlesData.test_038_a_get_request_is_sent_to_the_API_with_id_and_text_format(String,String)"
});
formatter.result({
  "duration": 2559660900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 32
    }
  ],
  "location": "TlesData.test_039_http_success_return_code(int)"
});
formatter.result({
  "duration": 74200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text/plain",
      "offset": 31
    }
  ],
  "location": "TlesData.test_040_responce_content_type_text_is(String)"
});
formatter.result({
  "duration": 70000,
  "status": "passed"
});
formatter.match({
  "location": "TlesData.test_041_response_content_type_is(DataTable)"
});
formatter.result({
  "duration": 1046300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 37,
      "value": "#Scenario 13:"
    }
  ],
  "line": 39,
  "name": "Return the TLE data in default format when format provided is invalid",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;return-the-tle-data-in-default-format-when-format-provided-is-invalid",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "a get request is sent to the API with invalid id \"25544\" and format \"invalid\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "HTTP success status response code returned \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "the content-type returned is \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "response has following output fields",
  "rows": [
    {
      "cells": [
        "id",
        "name",
        "header"
      ],
      "line": 44
    },
    {
      "cells": [
        "25544",
        "iss",
        "ISS (ZARYA)"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "25544",
      "offset": 50
    },
    {
      "val": "invalid",
      "offset": 69
    }
  ],
  "location": "TlesData.test_042_a_get_request_is_sent_to_the_API_with_invalid_id_and_format(String,String)"
});
formatter.result({
  "duration": 2341063200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 44
    }
  ],
  "location": "TlesData.test_043_http_success_return_code(int)"
});
formatter.result({
  "duration": 189400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "application/json",
      "offset": 30
    }
  ],
  "location": "TlesData.test_044_content_type_returned_is_json(String)"
});
formatter.result({
  "duration": 199200,
  "status": "passed"
});
formatter.match({
  "location": "TlesData.test_045_response_contains_following_output_field(DataTable)"
});
formatter.result({
  "duration": 1031700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 48,
      "value": "#Scenario 14:"
    }
  ],
  "line": 50,
  "name": "Return HTTP error 404 if id is not found.",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;return-http-error-404-if-id-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "a get request is sent to the API with incorrect or invalid id \"87893\"",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "HTTP error code is reported \"404\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "87893",
      "offset": 63
    }
  ],
  "location": "TlesData.test_046_a_get_request_with_incorrect_or_invalid_id(String)"
});
formatter.result({
  "duration": 1709086099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 29
    }
  ],
  "location": "TlesData.test_047_the_error_return_code_is(int)"
});
formatter.result({
  "duration": 197400,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#Scenario 15:"
    }
  ],
  "line": 57,
  "name": "JSON response schema validation",
  "description": "",
  "id": "return-the-tle-data-for-a-given-satellite-in-either-json-or-text-format;json-response-schema-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@regression_test"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "a valid get request is sent to the API with id \"25544\" and format \"json\"",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "API returns valid json file",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "25544",
      "offset": 48
    },
    {
      "val": "json",
      "offset": 67
    }
  ],
  "location": "TlesData.test_052_a_valid_get_request_is_sent_to_the_API_with_id(String,String)"
});
formatter.result({
  "duration": 5920820701,
  "status": "passed"
});
formatter.match({
  "location": "TlesData.test_054_response_contains_following_fields()"
});
formatter.result({
  "duration": 37593001,
  "status": "passed"
});
});