import Duck from "../Duck";
import FlyRocketPowered from "../flyBehaviors/FlyRocketPowered";
import MallardDuck from "../MallardDuck";
import ModelDuck from "../ModelDuck";

export default class MiniDuckSimulator {
  constructor() {
    const mallardDuck: Duck = new MallardDuck();
    mallardDuck.performFly();
    mallardDuck.performQuack();

    const model: Duck = new ModelDuck();
    model.performFly();
    model.setFlyBehavior(new FlyRocketPowered());
    model.performFly();
  }
}
