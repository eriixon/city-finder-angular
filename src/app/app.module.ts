import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import { FinderComponent } from './finder/finder.component';
import { CityService } from './services/city.service';
import { FirebaseModule } from './services/firebase.module';
import { MaterialModule } from './services/material.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FirebaseModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    FinderComponent
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
