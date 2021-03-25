import Duck from "../Duck";
import FlyNoWay from "../flyBehaviors/FlyNoWay";
import Quack from "../quackBehaviors/Quack";

export default class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }

  display() {
    console.log("i`m a model Duck");
  }
}
