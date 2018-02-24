import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs/Observable';
import { IFoundCity } from '../services/data-model';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {

  constructor(public cs: CityService) { }

  @Input()
  cityList: IFoundCity[];

  @Output()
  remove: EventEmitter<IFoundCity> = new EventEmitter();

  onDeleteCity(city: IFoundCity) {
    this.cs.cityList = this.cs.cityList.filter(c => c !== city);
    console.log(this.cs.cityList);
    // this.remove.emit(city);
  }
}
