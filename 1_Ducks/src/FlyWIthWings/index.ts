import IFlyBehavior from "../IFlyBehavior";

export default class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log("I`m flying!");
    }
}