import IFlyBehavior from "../../interfaces/IFlyBehavior";

export default class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log("I can`t fly!");
    }
}