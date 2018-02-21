import { Component, OnInit } from '@angular/core';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {

  constructor(public cs: CityService) { }
  ngOnInit() { }
}
