import { Injectable } from '@angular/core';
import { IFoundCity, FoundCity, Request } from './data-model';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { of } from 'rxjs/observable/of';
import { MatButtonModule, MatInputModule, MatCardModule, MatSelectModule, MatDialog } from '@angular/material';
import { PopupDialogComponent } from '../dialogs/popup-dialog.component';
import { ErrorDialogComponent } from '../dialogs/error-dialog.component';


@Injectable()
export class CityService {
  public cityList: FoundCity[] = [];
  private isCityFound = false;


  constructor(
    private db: AngularFireDatabase,
    public dialog: MatDialog
  ) { }

  makeRequest(r: Request) {
    const lookDialogRef = this.dialog.open(PopupDialogComponent, { height: '250px', width: '400px' });
    this.getCountryList(r.country).forEach(counry => {
      const foundCities = this.lookUpCitis(counry, r);
      this.cityList = this.cityList.concat(foundCities);
      lookDialogRef.close();
      if ( foundCities.length === 0) {
        const ErrorDialogRef = this.dialog.open(ErrorDialogComponent, { height: '250px', width: '400px'});
      }
    });
  }

  getCountryList(path: string): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }

  lookUpCitis(states: object[], req: Request): IFoundCity[] {
    const foundCities: FoundCity[] = [];
    states.forEach(state => {
      Object.values(state).forEach(element => {
        if (element.hasOwnProperty('Name') && element['Name'] === req.city) {
          const fc = new FoundCity(element['Name'], '', '', element['State'], req.country, 0);
          foundCities.push(fc);
        } else {
          Object.values(element).forEach(subelement => {
            if (subelement.hasOwnProperty('Name') && subelement['Name']  === req.city) {
              const c = subelement['County'] ? subelement['County'] : '';
              const m = subelement['Municipality'] ? subelement['Municipality'] : '';
              const fc = new FoundCity(subelement['Name'], c, m, subelement['State'], req.country, 0);
              foundCities.push(fc);
            }
          });
        }
      });
    });
    return foundCities;
  }
}
