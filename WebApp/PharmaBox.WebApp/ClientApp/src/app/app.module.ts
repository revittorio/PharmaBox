import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import {BrowserModule} from '@angular/platform-browser';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PharmaboxComponent } from './pharmabox/pharmabox.component';
import { TherapyComponent } from './therapy/therapy.component';
import { far } from '@fortawesome/free-regular-svg-icons';
import { PharmaEditComponent } from './modals/pharma-edit/pharma-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ 
   declarations: [
      AppComponent,
      HomeComponent,
      ErrorPageComponent,
      AboutComponent,
      PharmaboxComponent,
      TherapyComponent,
      PharmaEditComponent,
   ],
   imports: [
      AppRoutingModule,
      BrowserModule,
      HttpClientModule,
      FontAwesomeModule,
      FormsModule, 
      ReactiveFormsModule,
      MatDialogModule, 
      MatFormFieldModule,
      MatButtonModule,
      MatInputModule,
      BrowserAnimationsModule
   ],
   entryComponents: [
      PharmaEditComponent
   ],
   bootstrap: [
      AppComponent
   ],
   providers: [DatePipe]
})
export class AppModule {
   constructor(library: FaIconLibrary) {
      library.addIconPacks(far)
   }
}
