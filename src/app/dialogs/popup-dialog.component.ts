import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: 'popup-dialog.component.html',
  styleUrls: ['./dialog.css']
})
export class PopupDialogComponent {
  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>) {}
}
