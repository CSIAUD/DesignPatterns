class Iterateur {
    private index = 0;

    public constructor(private liste: List){}
    
    public next(){
        return this.liste.get(this.index);
    }
    public hasNext(){
        return ++this.index - 1 < this.liste.getSize();
    }
}

export class List{
    private data: any = {};
    private size = 0;

    public get(i: number){
        return this.data[i];
    }
    public add(value: any){
        this.data[++this.size] = value;
    }

    public getSize(){
        return this.size;
    }

    public iterator(){
        return new Iterateur(this);
    }
}