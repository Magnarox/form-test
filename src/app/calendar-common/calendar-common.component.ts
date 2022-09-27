import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-calendar-common',
  templateUrl: './calendar-common.component.html',
  styleUrls: ['./calendar-common.component.css']
})
export class CalendarCommonComponent implements OnInit {

  @Input()
  myModel!: Date;

  @Output()
  myModelChange: EventEmitter<Date> = new EventEmitter<Date>();

  @Input()
  public myPlaceholder!: string;

  @Input()
  public myControlName!: string;

  @Input()
  public myFormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  callChange() {
    this.myModelChange.emit(this.myModel);
  }
}
