package testRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * This class acts as an interlink between cucumber feature files and step definition classes
 */

@RunWith(Cucumber.class)
@CucumberOptions(
				features = "../RestApiTestingFramework/src/main/java/feature/", 
				glue = { "stepDefination" }, 
				plugin = {"json:target/cucumber-report.json","pretty","html:target/cucumber","rerun:target/rerun.txt"},
				monochrome = true)
public class TestRunner {

}


// plugin = {"json:target/cucumber-report.json","pretty","html:target/cucumber","rerun:target/rerun.txt"},