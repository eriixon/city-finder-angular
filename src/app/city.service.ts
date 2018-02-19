import { Injectable } from '@angular/core';
import { FoundCity, Request } from './data-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class CityService {
  // private cityList: FoundCity[];
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getItemsList(path: string): Observable<any[]> {
    return this.db.list<FoundCity>(path).valueChanges();
  }

  makeRequest(r: Request) {
    this.getItemsList(r.country).forEach(counry => {
      Object.entries(counry).forEach(state => {
        // console.log(state.length);
        Object.entries(state).forEach(
          ([key, value]) => console.log(value));
        });
    });
  }

  lookUpCitis() { }


  // addCity(city: FoundCity) {
  //   this.cityList.push(city);
  // }

  // deleteCity(city: FoundCity) {
  //   this.cityList.splice(this.cityList.indexOf(city), 1);
  // }

  // getCities() {
  //   return this.cityList;
  // }

}
