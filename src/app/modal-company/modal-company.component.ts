import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'app-modal-company',
  templateUrl: './modal-company.component.html',
  styleUrls: ['./modal-company.component.sass']
})
export class ModalSantanderComponent {

  constructor(
    private dialogRef: MatDialogRef<ModalSantanderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialog: MatDialog
  ) {
  }

  seeProjects() {
    let images;
    switch (this.data) {
      case 'santander':
        images = [
          '/assets/santander/IMG-20191122-WA0004.jpg',
          '/assets/santander/IMG-20210507-WA0038.jpg',
          '/assets/santander/IMG-20210623-WA0023.jpg',
          '/assets/santander/IMG-20210727-WA0013.jpg',
          '/assets/santander/IMG-20210813-WA0010.jpg',
        ];
      break;
      case 'cardif':
        images = [
          '/assets/Cardif/1.png',
          '/assets/Cardif/2.png',
          '/assets/Cardif/3.png',
          '/assets/Cardif/4.png',
          '/assets/Cardif/5.png',
          '/assets/Cardif/6.png',
          '/assets/Cardif/7.png',
        ];
      break;
    }
    this.dialog.open(ImageViewerComponent, {
      data: {
        images: images,
        altTexts: ['lal']
      },
      panelClass: 'full-screen-dialog',
      maxHeight: '700px'
    });
  }
}
