// Liste ====================================================================
// import { List } from "./class.list";

// const liste = new List();
// liste.add(12);
// liste.add(23);
// liste.add(34);

// const it = liste.iterator();

// while(it.hasNext()){
//     console.log(it.next());
// }

// Véhicule =================================================================
import { VehiculeFactory } from "./class.vehicule";

const factory = new VehiculeFactory();
// const vehicule = factory.createVehicule();
const v1 = factory.createVehicule(987);
const v2 = factory.createVehicule();
v1.avancer();
// console.log(v1);
// console.log(v2);