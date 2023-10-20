
export interface Rouable {
    type: number;
    
    getImpl(): string;

    avancer(): number;
}