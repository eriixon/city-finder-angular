import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Countries } from '../data-model';
import { Finder } from '../data-model';
import { CityService } from '../city.service';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  cityForm: FormGroup;
  countries = Countries;
  finder = new Finder('', '');

  constructor(private fb: FormBuilder) { this.createForm(); }

  createForm() {
    this.cityForm = this.fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.finder);
  }

  ngOnInit() { }

}
