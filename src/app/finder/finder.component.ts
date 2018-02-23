import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../services/data-model';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs/Observable';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {
  cityForm: FormGroup;
  countries = Countries;
  items: Observable<any[]>;


  constructor(
    private fb: FormBuilder,
    private cs: CityService
  ) { this.createForm(); }

  createForm() {
    this.cityForm = this.fb.group({
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    this.cs.makeRequest(this.cityForm.value);
    this.createForm();
  }

  ngOnInit() { }

}
