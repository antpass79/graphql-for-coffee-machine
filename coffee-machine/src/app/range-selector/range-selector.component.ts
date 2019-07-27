import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['./range-selector.component.css']
})
export class RangeSelectorComponent implements OnInit {

  @Output()
  valueChange = new EventEmitter<number>();

  @Input()
  cleatNumber = 5;
  @Input()
  value = 3;

  cleats: { color: string }[] = [];
  private colorGreen = "green";
  private colorGray = "gray";

  constructor() { }  

  ngOnInit() {
    for (let i = 0; i < this.cleatNumber; i++) {
      this.cleats.push({
          color: i < this.value ? this.colorGreen : this.colorGray
        });
    }
  }

  onDecrease() {
    let index = this.cleats.map(cleat => cleat.color).lastIndexOf(this.colorGreen);
    if (index !== -1) {
      this.cleats[index].color = this.colorGray;
    }

    this.valueChange.emit(this.cleats.filter(cleat => cleat.color === this.colorGreen).length);
  }

  canDecrease(): boolean {
    return this.cleats.some(cleat => cleat.color === this.colorGreen);
  }

  onIncrease() {
    let index = this.cleats.map(cleat => cleat.color).indexOf(this.colorGray);
    if (index !== -1) {
      this.cleats[index].color = this.colorGreen;
    }

    this.valueChange.emit(this.cleats.filter(cleat => cleat.color === this.colorGreen).length);
  }

  canIncrease(): boolean {
    return this.cleats.some(cleat => cleat.color === this.colorGray);
  }
}
