import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatGridListModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
