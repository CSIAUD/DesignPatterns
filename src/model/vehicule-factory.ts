import { Camion } from "./camion";
import { Roue } from "./roue";
import { Vehicule } from "./vehicule";
import { Voiture } from "./voiture";

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