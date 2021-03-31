import IDisplayElement from "../../interfaces/IDisplayElement";
import IObserver from "../../interfaces/IObserver";
import ISubject from "../../interfaces/ISubject";

export default class ForecastDisplay implements IObserver, IDisplayElement {
  temperature: number = 0;
  weatherData: ISubject;

  constructor(weatherData: ISubject) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, _: number, __: number) {
    this.temperature = temperature;
    this.display();
  }

  display() {
    console.log("ForecastDisplay ", this.temperature, " F");
  }
}
