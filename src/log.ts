export function LogMethod(){
    return function(target: any, property: string, descriptor: PropertyDescriptor){
        const oldValue = descriptor.value;
        descriptor.value = function(...args: any[]){
            const result = oldValue.apply(this, args);
            console.log("Méthode '", property, "' appellée avec", args, "et retourne", result);
            return result;
        }
    }
}