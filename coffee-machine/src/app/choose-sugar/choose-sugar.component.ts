import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'choose-sugar',
  templateUrl: './choose-sugar.component.html',
  styleUrls: ['./choose-sugar.component.css']
})
export class ChooseSugarComponent implements OnInit {

  @Output()
  sugarChange = new EventEmitter<number>();

  constructor() { }  

  ngOnInit() {
  }

  onValueChange(value: number) {
    this.sugarChange.emit(value);
  }
}
