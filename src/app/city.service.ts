import { Injectable } from '@angular/core';
import { FoundCity, Request, CityList } from './data-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CityService {
  cityList: FoundCity[] = [];

  constructor(
    private db: AngularFireDatabase,
  ) { }

  makeRequest(r: Request) {
    this.getCountryList(r.country).forEach(counry => this.lookUpCitis(counry, r.city));
  }

  getCountryList(path: string): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  lookUpCitis(states: object[], rcity: string) {
    states.forEach(state => {
      Object.values(state).forEach(element => {
        if (element.hasOwnProperty('Name') && element['Name'] === rcity) {
          this.addCityToList(element);
        } else {
          Object.values(element).forEach(subelement => {
            if (subelement.hasOwnProperty('Name') && subelement['Name']  === rcity) {
              this.addCityToList(element);
            }
          });
        }
      });
    });
  }

  addCityToList(city: FoundCity) {
    console.log (city);
    this.cityList.push(city);
  }

  deleteCity(city: FoundCity) {
    this.cityList.splice(this.cityList.indexOf(city), 1);
  }
}


