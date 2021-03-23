import IQuackBehavior from "../IQuackBehavior";

export default class Squeak implements IQuackBehavior {
    quack() {
        console.log("Squeak!");
    }
}