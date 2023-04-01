import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule  } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { ModalExperienceComponent } from './modal-experience/modal-experience.component';
import { ModalSantanderComponent } from './modal-company/modal-company.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalExperienceComponent,
    ModalSantanderComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatExpansionModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
