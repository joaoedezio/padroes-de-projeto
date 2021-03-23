import MallardDuck from "../MallardDuck";

export default class MiniDuckSimulator {
  constructor() {
    const mallardDuck = new MallardDuck();
    mallardDuck.performFly();
    mallardDuck.performQuack();
  }
}
