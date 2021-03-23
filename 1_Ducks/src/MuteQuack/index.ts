import IQuackBehavior from "../IQuackBehavior";

export default class MuteQuack implements IQuackBehavior {
    quack() {
        console.log("<< Silence >>");
    }
}