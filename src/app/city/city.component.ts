import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFoundCity } from '../services/data-model';
import { CityService } from '../services/city.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent {
  @Input() city: IFoundCity;

  constructor( public cs: CityService ) { }

  @Output()
  remove: EventEmitter<IFoundCity> = new EventEmitter();

  deleteCity(city: any): void {
    this.remove.emit(city);
  }

}
