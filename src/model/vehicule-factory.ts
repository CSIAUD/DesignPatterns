import * as fs from "fs";
import { Camion } from "./camion";
import { Roue } from "./roue";
import { IVehiculeSave, Vehicule } from "./vehicule";
import { Voiture } from "./voiture";
import { Rouable } from "./rouable";

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
            new Roue(),
            new Roue(),
            new Roue()
        ])
    }

    public rendreVehicule(vehicule: Vehicule){
        this.garage.unshift(vehicule);
    }

    public saveGarage(){
        const state = this.garage.map((v) => {
            return v.save();
        })
        
        // fs.writeFileSync("./src/state.json", JSON.stringify(state, null, 1));
    }
    public restoreGarage(){
        const stateString = fs.readFileSync("./state.json").toString();
        const state = JSON.parse(stateString) as IVehiculeSave[];
        this.garage.length = 0;
        this.garage = state.map((entry) => {
            const roues: Rouable[] = [];
            let result: Vehicule;

            for (let i = 0; i < entry.nombreRoues; i++) {
                roues.push(new Roue());
            }

            switch (entry.typeClass) {
                case "Voiture":
                    result = new Voiture(roues);
                    break;
                case "Camion":
                    result = new Camion(roues);
                    break;
                
                default:
                    throw new Error('not recognized');
                    break;
            }

            result.restore();
        })
    }
}