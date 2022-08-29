export class Product
{
    id: number=0; 
    name: string = "";
    price: number= 0;
    stock: number= 0;
    tags: string[];
    date: Date;

    constructor(Name: string, Price:number, Stock:number, Tags:any){
        this.id=Math.round(Math.random()*100);
        this.name = Name;
        this.price= Price;
        this.stock=Stock;
        this.tags = Tags;
        this.date = new Date();
    }

}