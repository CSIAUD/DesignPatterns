import { Vehicule } from "./vehicule";

export class Voiture extends Vehicule{
    protected getImpl(): string {
        return "Voiture";
    }
}