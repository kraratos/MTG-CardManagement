export class Card{
    Id : string
    Name : string;
    Possesso : string;
    Proprieta : string;
    Quantita : number;
    
    
    constructor(id? :string,name?:string,possesso?:string,proprieta?:string,quantitna?:number)
    {
        this.Id = id;
        this.Name = name;
        this.Possesso = possesso;
        this.Proprieta = proprieta;
        this.Quantita = quantitna;
    }
   
}