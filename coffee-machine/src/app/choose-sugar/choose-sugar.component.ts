import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'choose-sugar',
  templateUrl: './choose-sugar.component.html',
  styleUrls: ['./choose-sugar.component.css']
})
export class ChooseSugarComponent implements OnInit {

  @Output()
  sugarChange = new EventEmitter<number>();

  cleats: { color: string }[];
  private colorGreen = "green";
  private colorGray = "gray";

  constructor() { }  

  ngOnInit() {

    this.cleats = [
      {
        color: this.colorGreen
      },
      {
        color: this.colorGreen
      },
      {
        color: this.colorGreen
      },
      {
        color: this.colorGray
      },
      {
        color: this.colorGray
      }
    ]
  }

  onDecrease() {
    let index = this.cleats.map(cleat => cleat.color).lastIndexOf(this.colorGreen);
    if (index !== -1) {
      this.cleats[index].color = this.colorGray;
    }

    this.sugarChange.emit(this.cleats.filter(cleat => cleat.color === this.colorGreen).length);
  }

  canDecrease(): boolean {
    return this.cleats.some(cleat => cleat.color === this.colorGreen);
  }

  onIncrease() {
    let index = this.cleats.map(cleat => cleat.color).indexOf(this.colorGray);
    if (index !== -1) {
      this.cleats[index].color = this.colorGreen;
    }

    this.sugarChange.emit(this.cleats.filter(cleat => cleat.color === this.colorGreen).length);
  }

  canIncrease(): boolean {
    return this.cleats.some(cleat => cleat.color === this.colorGray);
  }
}
