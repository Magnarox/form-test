import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DropdownItem } from 'primeng/dropdown';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public formulaireTest = new FormGroup({
    input1: new FormControl(),
    date1: new FormControl(),
    date2: new FormControl(),
    date3: new FormControl()
  });

  public date1Value!: Date;
  public placeHolder1 = 'date1';
  public date2Value!: Date;
  public placeHolder2 = 'date2';

  constructor() {
    this.optionList = [];
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.date1Value);
    console.log(this.date2Value);

    console.log(this.formulaireTest.value);
  }

  public showModal:boolean = false;
  public optionList: string[];

  openModal1() {
    this.optionList = [];
    this.optionList.push('OPTION_2');
    this.showModal = true;
  }

  openModal2() {
    this.optionList = [];
    this.optionList.push('OPTION_1');
    this.optionList.push('OPTION_2');
    this.showModal = true;
  }

  onDialogClose(event: any) {
    this.showModal = false;

    if(event) {
      console.log(JSON.stringify(event));
    }
 }
}
