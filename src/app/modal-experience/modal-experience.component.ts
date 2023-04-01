import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.sass']
})

export class ModalExperienceComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
  }
  close() {
    this.dialogRef.close();
  }
}
