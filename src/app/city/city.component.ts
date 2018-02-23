import { Component, OnInit, Input } from '@angular/core';
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
export class CityComponent implements OnInit {
  @Input() city: IFoundCity;

  constructor( public cs: CityService ) { }
  ngOnInit() {}
}
