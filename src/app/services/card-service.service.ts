import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private firestore: AngularFirestore) { }
  getCards() {
    return this.firestore.collection('Cards').snapshotChanges();
  }
  createCard(card: Card) {
    return this.firestore.collection('Cards').add(card);
  }
  updateCard(card: Card) {
    this.firestore.doc('Cards/' + card.Id).update(card);
  }
  deletecard(card: Card) {
    this.firestore.doc('Cards/' + card.Id).delete();
  }
}
