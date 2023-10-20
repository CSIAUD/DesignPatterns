import { LogMethod } from "../log";
import { Rouable } from "./rouable";

export abstract class Vehicule {
    private roues: Rouable[]=[]; 
    private km = 0
    
    protected abstract getImpl(): string;

    public constructor (roues : Rouable[]){
        this.roues=roues
    }

        // @LogMethod()
        public avancer(){
        this.km += this.roues.reduce((acc, roue) => {
            if(acc === null){
                return roue.avancer();
            }
            return Math.min(acc, roue.avancer());
        }, 99); 
    }

    public save(): IVehiculeSave{
        return {
            km: this.km,
            typeClass: this.getImpl(),
            nombreRoues: this.roues.length,
            typeRoues: this.roues[0].getImpl()
        }
    }

    public restore(state: IVehiculeSave): void{
        this.km = state.km;
    }
}
    
export interface IVehiculeSave {
    typeClass: string;
    km: number;
    typeRoues: string;
    nombreRoues: Number;
}