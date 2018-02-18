import { Injectable } from '@angular/core';
import { FoundCity } from './data-model';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CityService {
  private cityList: FoundCity[];
  items: Observable<any[]>;
  db: AngularFireDatabase;


  findCityes(request: object) {
    console.log(request.country);
    console.log(this.db);
    // this.items = this.db.list(request).valueChanges();
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
