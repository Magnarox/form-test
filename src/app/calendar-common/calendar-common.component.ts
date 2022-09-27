import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar-common',
  templateUrl: './calendar-common.component.html',
  styleUrls: ['./calendar-common.component.css']
})
export class CalendarCommonComponent implements OnInit {

  @Input()
  public myPlaceholder!: string;

  @Input()
  public myControlName!: string;

  @Input()
  public myFormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
