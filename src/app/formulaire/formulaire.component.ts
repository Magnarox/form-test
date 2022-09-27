import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.date1Value);
    console.log(this.date2Value);

    console.log(this.formulaireTest.value);
  }
}
