import IQuackBehavior from "../../interfaces/IQuackBehavior";

export default class MuteQuack implements IQuackBehavior {
    quack() {
        console.log("<< Silence >>");
    }
}