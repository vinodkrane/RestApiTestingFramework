package utility;

import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;


/**
 * A environment variable class which get JSON values and convert them into Java variables .
 */
public class Environment {

	/**
	 * This method retrieve value from JSONObject
	 * @param key .
	 * @return value.
	 */
	public static String loadValue(String key) {
		JSONParser parser = new JSONParser();
		try {
			Reader reader = new FileReader("../RestApiTestingFramework/src/test/resources/environment.json");

			JSONObject jsonObject = null;
			try {
				jsonObject = (JSONObject) parser.parse(reader);
			} catch (org.json.simple.parser.ParseException e) {
				e.printStackTrace();
			}

			key = (String) jsonObject.get(key);

		} catch (IOException e) {
			e.printStackTrace();
		}
		return key;
	}
}