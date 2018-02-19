import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ]
})
export class FirebaseModule { }
