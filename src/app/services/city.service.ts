import { Injectable } from '@angular/core';
import { FoundCity, Request } from './data-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CityService {
  public cityList: FoundCity[] = [];

  constructor(
    private db: AngularFireDatabase,
  ) { }

  makeRequest(r: Request) {
    this.getCountryList(r.country).forEach(counry => this.lookUpCitis(counry, r));
  }

  getCountryList(path: string): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  lookUpCitis(states: object[], req: Request) {
    states.forEach(state => {
      Object.values(state).forEach(element => {
        if (element.hasOwnProperty('Name') && element['Name'] === req.city) {
          this.createCityElement(
            element['Name'], '', '',
            element['State'], req.country);
        } else {
          Object.values(element).forEach(subelement => {
            if (subelement.hasOwnProperty('Name') && subelement['Name']  === req.city) {
              this.createCityElement(
                subelement['Name'],
                subelement['County'] ? subelement['County'] : '',
                subelement['Municipality'] ? subelement['Municipality'] : '',
                subelement['State'], req.country);
            }
          });
        }
      });
    });
  }

  createCityElement(city: string,  county: string, municipality: string, state: string, country: string ) {
    const fc = new FoundCity(city, county, municipality, state, country, 0);
    this.cityList.push(fc);
  }

  deleteCity(city: FoundCity) {
    this.cityList.splice(this.cityList.indexOf(city), 1);
  }

}
