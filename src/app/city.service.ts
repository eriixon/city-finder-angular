import { Injectable } from '@angular/core';
import { FoundCity } from './data-model';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {
  private cityList: FoundCity[];
  // items: Observable<any[]>;
  // db: AngularFirestore;

  // constructor(db: AngularFirestore) {
  //   // this.items = db.collection('USA').valueChanges();
  //   // console.log(db.collection('USA').valueChanges());
  // }

  findCityes(request: object) {
    console.log(request);
    // console.log(this.db);
  }

  addCity(city: FoundCity) {
    this.cityList.push(city);
  }

  deleteCity(city: FoundCity) {
    this.cityList.splice(this.cityList.indexOf(city), 1);
  }

  getCities() {
    return this.cityList;
  }

}
