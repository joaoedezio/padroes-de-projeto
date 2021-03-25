import IFlyBehavior from "../../interfaces/IFlyBehavior";

export default class FlyWithWings implements IFlyBehavior {
    fly() {
        console.log("I`m flying!");
    }
}