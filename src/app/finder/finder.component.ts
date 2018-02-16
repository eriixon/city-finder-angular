import { Component, OnInit } from '@angular/core';
import { Countries } from '../data-model';
import { Finder } from '../data-model';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../city.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  countries = Countries;
  country = 'banana';

  finder = new Finder('', '');

  constructor() { }



  onSubmit() {
    console.log(this.finder);
  }

  ngOnInit() { }


}
