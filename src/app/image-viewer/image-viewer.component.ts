import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.sass']
})
export class ImageViewerComponent {
  currentImageIndex = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { images: string[], altTexts: string[] }) { }
}
