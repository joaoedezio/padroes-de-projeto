import IDisplayElement from "../../interfaces/IDisplayElement";
import IObserver from "../../interfaces/IObserver";
import ISubject from "../../interfaces/ISubject";

export default class StatistcsDisplay implements IObserver, IDisplayElement {
  temperature: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }

  display() {
    console.log(
      "Current Conditions ",
      this.temperature,
      " F degree and ",
      this.humidity,
      " % humidity and pressure ",
      this.pressure
    );
  }
}
