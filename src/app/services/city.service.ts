import { Injectable } from '@angular/core';
import { FoundCity, Request, CityList } from './data-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';


@Injectable()
export class CityService {
  public cityList: FoundCity[] = [];
  private fc: FoundCity;

  constructor( private db: AngularFireDatabase ) { }

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
          this.fc = new FoundCity();
          this.fc.city = element['Name'];
          this.fc.state = element['State'];
          this.fc.county = '';
          this.fc.municipality = '';
          this.fc.country = req.country;
          this.addCityToList(this.fc);
          this.fc = new FoundCity();
        } else {
          Object.values(element).forEach(subelement => {
            if (subelement.hasOwnProperty('Name') && subelement['Name']  === req.city) {
              this.fc = new FoundCity();
              this.fc.city = subelement['Name'];
              this.fc.county = subelement['County'] ? subelement['County'] : '';
              this.fc.municipality = subelement['Municipality'] ? subelement['Municipality'] : '';
              this.fc.state = subelement['State'];
              this.fc.country = req.country;
              this.addCityToList(this.fc);
              this.fc = new FoundCity();
            }
          });
        }
      });
    });
  }

  addCityToList(city: FoundCity) {
    this.cityList.push(city);
    console.log(this.cityList);
  }

  deleteCity(city: FoundCity) {
    this.cityList.splice(this.cityList.indexOf(city), 1);
  }

}


