import { LogMethod } from "../log";
import { Rouable } from "./rouable";

export abstract class Vehicule{
    private roues: Rouable[]=[]; 
    private km = 0

    public constructor (roues : Rouable[]){
        this.roues=roues
    }

        @LogMethod()
        public avancer(){
        this.km += this.roues.reduce((acc, roue) => {
            if(acc === null){
                return roue.avancer();
            }
            return Math.min(acc, roue.avancer());
        }, 99); 
    }
}
    
