import Duck from "../Duck/index";
import FlyWithWings from "../flyBehaviors/FlyWIthWings";
import Quack from "../quackBehaviors/Quack";

export default class MallardDuck extends Duck {
  quackBehavior = new Quack();
  flyBehavior = new FlyWithWings();

  display() {
    console.log("I`m a real Mallard Duck");
  }
}
