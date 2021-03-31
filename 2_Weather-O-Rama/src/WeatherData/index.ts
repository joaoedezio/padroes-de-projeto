import IObserver from "../interfaces/IObserver";
import ISubject from "../interfaces/ISubject";

export default class WeatherData implements ISubject {
  observers: Array<IObserver>;
  temperature: number;
  humidity: number;
  pressure: number;

  constructor() {
    this.observers = [];
    this.temperature = 0;
    this.humidity = 0;
    this.pressure = 0;
  }

  registerObserver(o: IObserver) {
    this.observers.push(o);
  }

  removeObserver(o: IObserver) {
    const index = this.observers.indexOf(o);
    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.temperature, this.humidity, this.pressure);
    });
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temperature: number, humidity: number, pressure: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
}
