import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CalendarCommonComponent } from './calendar-common/calendar-common.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    CalendarCommonComponent,
    GenericModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
