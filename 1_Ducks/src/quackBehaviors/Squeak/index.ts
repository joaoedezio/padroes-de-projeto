import IQuackBehavior from "../../interfaces/IQuackBehavior";

export default class Squeak implements IQuackBehavior {
    quack() {
        console.log("Squeak!");
    }
}