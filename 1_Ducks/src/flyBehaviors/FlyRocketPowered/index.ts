import IFlyBehavior from "../../interfaces/IFlyBehavior";

export default class FlyRocketPowered implements IFlyBehavior {
  fly() {
    console.log("I`m flying with a rocket!");
  }
}
