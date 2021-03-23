import Duck from "../Duck/index";
import FlyWithWings from "../FlyWIthWings/index";
import Quack from "../Quack/index";

export default class MallardDuck extends Duck {
  quackBehavior = new Quack();
  flyBehavior = new FlyWithWings();

  display() {
    console.log("I`m a real Mallard Duck");
  }
}
