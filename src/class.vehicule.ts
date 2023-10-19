import { LogMethod } from "./log";


interface Rouable {
    type: number;

    avancer(): number;
}

abstract class Vehicule{
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
    
class Roue implements Rouable{
    public type = -1;
    public constructor(type: number = -1){
        this.type = type != -1 ? type : 0;
    }
    public avancer(){
        return 1;
    }
}

class Voiture extends Vehicule{}
class Camion extends Vehicule{}

export class VehiculeFactory{
    private garage: Vehicule[]= [];

    public createVehicule(masse: number = 0): Vehicule{
        if (masse > 500) {
            return this.getCamion();
        }
        return this.getVoiture();
    }

    private getVoiture(){
        const voiture = this.garage.find(e => e instanceof Voiture);
        if (voiture){
            this.garage = this.garage.filter(e => e != voiture);
            return voiture;
        }
        return new Voiture([
            new Roue(),
            new Roue(),
            new Roue(),
            new Roue()
        ]);
    }

    private getCamion(){
        const voiture = this.garage.find(e => e instanceof Voiture);
        if (voiture){
            this.garage = this.garage.filter(e => e != voiture);
            return voiture;
        }
        return new Camion([
            new Roue(),
            new Roue(),
            new Roue(),
            new Roue()
        ])
    }

    public rendreVehicule(vehicule: Vehicule){
        this.garage.unshift(vehicule);
    }
}