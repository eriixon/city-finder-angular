import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../services/data-model';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent {
  cityForm: FormGroup;
  countries = Countries;
  items: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private cs: CityService,

  ) { this.createForm(); }

  createForm() {
    this.cityForm = this.fb.group({
      city: ['', Validators.required ],
      country: ['', Validators.required ],
    });
  }

  onSubmit() {
    if (this.cityForm.value.city !== '' && this.cityForm.value.country !== '') {
      this.cs.makeRequest(this.cityForm.value);
      this.cityForm.reset();
    }
  }
}
