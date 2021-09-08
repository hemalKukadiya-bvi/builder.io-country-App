import axios from "axios";
import * as config from "../Config/config";

/* coomon api calling file */
class api {

  /// api for get country detail
  
  submitCountryName(countryName:string) {
    return axios.get(`${config.COUNTRY_NAME_API}/${countryName}`);
  }
  
  /// api for wether data
  
  getWeatherData(capitalName:string) {
    return axios.get(
      `${config.WEATHER_API}?access_key=${config.WEATHER__ACCESS_KEY}&query=${capitalName}`
    );
  }
}

export default new api();
