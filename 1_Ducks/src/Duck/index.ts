import IFlyBehavior from "../IFlyBehavior/index";
import IQuackBehavior from "../IQuackBehavior/index";

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

  swim() {
      console.log("All ducks float, even decoys!");
  }
}
