import { Rouable } from "./rouable";

export class Roue implements Rouable{
    public type = -1;

    public getImpl(): string{
        return "Roue";
    }

    public constructor(type: number = -1){
        this.type = type != -1 ? type : 0;
    }
    public avancer(){
        return 1;
    }
}
