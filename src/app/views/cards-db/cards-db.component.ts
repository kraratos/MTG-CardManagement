import { Component, OnInit, ViewChild } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import {AngularFirestore} from '@angular/fire/firestore'
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Card } from '../../model/card';
import { CardServiceService } from '../../services/card-service.service';
@Component({
  selector: 'app-cards-db',
  templateUrl: './cards-db.component.html',
  styleUrls: ['./cards-db.component.css']
})
export class CardsDBComponent implements OnInit {

  public filterQuery;
  public itemvalue = 'test';
  newCarta : string = "";
  @ViewChild('nomePossesso') newPossesso : any;
  @ViewChild('nomeProprieta') newProprieta : any;
  @ViewChild('nomeQuantita') newQuantita : any;
  @ViewChild('addCardModal') modal : any;
  observabele: Observable<any[]>;
  card: Card[];
  add : boolean = true;
  selectedCard:any = new Card();
  distinctCard:any[]=[];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];
  
  constructor(public db: AngularFireDatabase,
    private firestore: AngularFirestore,
    public cardService :CardServiceService) {
      this.cardService.getCards().subscribe(data => {
        this.card = data.map(e => {
          return {
            ...e.payload.doc.data() as {},
            Id: e.payload.doc.id
          } as Card;
        })
         this.distinctCard = Array.from(new Set(this.card.map((item: any) => item.Name)))
      });
      this.selectedCard;
  }
  ngOnInit(): void {
  }
  public aggiungiCarta(): void{
    this.card;
    
    // var car = this.selectedCard;
    var newcard : Card = new Card("",this.newCarta,this.newPossesso.nativeElement.value,this.newProprieta.nativeElement.value,this.newQuantita.nativeElement.value);
    if(this.add)
    this.cardService.createCard({Id :"",Name:this.newCarta,Possesso:this.newPossesso.nativeElement.value,Proprieta:this.newProprieta.nativeElement.value,Quantita:this.newQuantita.nativeElement.value});
    else{
      this.selectedCard.Name = this.newCarta;
      this.selectedCard.Possesso = this.newPossesso.nativeElement.value;
      this.selectedCard.Proprieta =  this.newProprieta.nativeElement.value;
      this.selectedCard.Quantita = this.newQuantita.nativeElement.value;
      this.cardService.updateCard(this.selectedCard);
    }
    
    // this.db.list('Cards').push({Id : this.newCarta+this.newPossesso.nativeElement.value+this.newProprieta.nativeElement.value,nome : this.newCarta, proprieta : this.newPossesso.nativeElement.value, possesso : this.newProprieta.nativeElement.value,quantita :this.newQuantita.nativeElement.value});
    // else
    // this.firestore.collection('Cards').doc(this.selectedCard.Id).set(car);
     this.closeModal();
     this.add = true;
    
  }
  closeModal():void{
    this.modal.hide();
    this.clearForm();
    this.selectedCard  = new Card();
  }
  updateCard(card : any){
    this.selectedCard = card;
    this.newCarta = this.selectedCard.Name;
    this.add = false;
    this.modal.show();
  }
  delete(card : any){
    this.cardService.deletecard(card);
  }
  clearForm():void{
    this.newCarta = '';
    this.newPossesso.nativeElement.value = '';
    this.newProprieta.nativeElement.value = '';
    this.newQuantita.nativeElement.value = '';
  }

}
