import { Vehicule } from "./vehicule";

export class Camion extends Vehicule {
    protected getImpl(): string {
        return "Camion";
    }
}