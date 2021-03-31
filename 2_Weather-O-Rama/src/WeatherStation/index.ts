import CurrentConditionDisplay from "../Display/CurrentConditionDisplay";
import ForecastDisplay from "../Display/ForecastDisplay";
import StatistcsDisplay from "../Display/StatistcsDisplay";
import HeatIndexDisplay from "../Display/HeatIndexDisplay";
import WeatherData from "../WeatherData";

export default class WeatherStation {
  constructor() {
    const weatherData = new WeatherData();

    const currentConditionDisplay = new CurrentConditionDisplay(weatherData);
    const forecastDisplay = new ForecastDisplay(weatherData);
    const statistcsDisplay = new StatistcsDisplay(weatherData);
    const heatIndexDisplay = new HeatIndexDisplay(weatherData);

    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 29.2);
    weatherData.setMeasurements(78, 90, 29.2);
  }
}
