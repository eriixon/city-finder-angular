import { Component, OnInit, Input } from '@angular/core';
import { FoundCity } from '../services/data-model';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [CityService]
})
export class CityComponent implements OnInit {
  @Input() city: FoundCity;

  constructor(public cs: CityService) { }
  ngOnInit() {}

}
