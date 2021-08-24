package utility;


/**
 * UrlBuilder class provides a convenient way to modify the contents of a Uri instance.  A class that handles creating, modifying url.
 */
public class UrlBuilder {
	static String basepath = Environment.loadValue("basePath");

    /**
     * This method retrieve the endoint URI.
     * @param none.
     * @return URI.
     */
    public static String getBasePath() {
        return Environment.loadValue("basePath");
    }

    /**
     * This method retrieve the position path.
     * @param id, timestamp, units(optional).
     * @return URI.
     */
    public static String getPositionPath(String id, String timestamp) {
    	return "/" + id + "/positions?timestamps=" + timestamp;
    }
    
    public static String getPositionPath(String id, String timestamps, String units) {
    	return "/" + id + "/positions?timestamps=" + timestamps + "&units=" + units;
    }

    /**
     * This method retrieve the tles path.
     * @param id, format(optional).
     * @return URI.
     */
    public static String getTlePath(String id) {
    	return "/" + id + "/" + "tles";
    }
    
    public static String getTlePath(String id, String format) {
    	return "/" + id + "/" + "tles" + "?format=" + format;
    }
}
