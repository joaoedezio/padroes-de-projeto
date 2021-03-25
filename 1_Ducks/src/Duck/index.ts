import IFlyBehavior from "../interfaces/IFlyBehavior/index";
import IQuackBehavior from "../interfaces/IQuackBehavior/index";

export default class Duck {
  flyBehavior: IFlyBehavior | undefined;
  quackBehavior: IQuackBehavior | undefined;

  constructor() {}

  display(): void {}

  performFly() {
    this.flyBehavior && this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior && this.quackBehavior.quack();
  }

  setFlyBehavior(fb: IFlyBehavior) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: IQuackBehavior) {
    this.quackBehavior = qb;
  }

  swim() {
    console.log("All ducks float, even decoys!");
  }
}
