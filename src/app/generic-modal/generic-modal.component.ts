import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DropdownItem } from 'primeng/dropdown';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.css']
})
export class GenericModalComponent implements OnInit {

  @Input() display: boolean;
  @Input() optionList: string[];
  @Output() displayChange = new EventEmitter();

  public selectedOption = '';

  constructor() {
    this.display = false;
    this.optionList = [];
  }


  ngOnInit(): void {

  }

  onShow() {
    this.selectedOption = this.optionList[0];
  }

  cancel(){
    this.displayChange.emit(null);
  }

  validate(){
    this.displayChange.emit({name: 'plop', value: 'plip', other: 'ploup'});
  }

  // Work against memory leak if component is destroyed
  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

}
