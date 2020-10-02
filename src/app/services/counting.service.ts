import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ANumber}  from '../model/ANumber';
import { map } from 'rxjs/operators';

@Injectable()
export class CountingService {
  numbersCollection: AngularFirestoreCollection<ANumber>;
  numbers: Observable<ANumber[]>
  numberDoc: AngularFirestoreDocument<ANumber>;

  constructor(public afs: AngularFirestore) {
    // this.numbers = this.afs.collection('numbers').valueChanges();
    this.numbersCollection = this.afs.collection('counting');
    this.numbers = this.numbersCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as ANumber;
        data.id = a.payload.doc.id;
        return data
      })
    })
    )
   }

  getNumbers() {
    return this.numbers
  }

  addNumber(num: ANumber) {
    this.numbersCollection.add(num);
  }

  deleteNumber(num: ANumber) {
    this.numberDoc = this.afs.doc(`counting/${num.id}`);
    this.numberDoc.delete();
  }

  updateNumber(num: ANumber) {
    console.log(num.id);
    this.numberDoc = this.afs.doc(`counting/${num.id}`);
    this.numberDoc.update(num);
  }

}


