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
import { SafeUrlPipe } from './services/safe-url.pipe';
import { PopupDialogComponent } from './dialogs/popup-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog.component';

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
    FinderComponent,
    SafeUrlPipe,
    PopupDialogComponent,
    ErrorDialogComponent,
  ],
  providers: [CityService],
  bootstrap: [AppComponent],
  entryComponents: [ PopupDialogComponent, ErrorDialogComponent ]
})
export class AppModule {}
