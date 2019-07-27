import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'insert-coins',
  templateUrl: './insert-coins.component.html',
  styleUrls: ['./insert-coins.component.css']
})
export class InsertCoinsComponent implements OnInit {

  @Output()
  coinsChange = new EventEmitter<number>();

  @Input()
  coins: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onInsert(coins: number) {
    this.coins += coins;
    this.coinsChange.emit(this.coins);
  }

  onReset() {
    this.coins = 0;
    this.coinsChange.emit(this.coins);
  }
}
