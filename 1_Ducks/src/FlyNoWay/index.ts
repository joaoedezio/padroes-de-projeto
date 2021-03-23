import IFlyBehavior from "../IFlyBehavior";

export default class FlyNoWay implements IFlyBehavior {
    fly() {
        console.log("I can`t fly!");
    }
}