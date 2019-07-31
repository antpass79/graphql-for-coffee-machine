import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeMachineComponent } from './coffee-machine.component';
import { InsertCoinsComponent } from '../insert-coins/insert-coins.component';
import { ChooseSugarComponent } from '../choose-sugar/choose-sugar.component';
import { DrinkOptionComponent } from '../drink-option/drink-option.component';
import { DrinkReadyComponent } from '../drink-ready/drink-ready.component';
import { CoffeeDashboardComponent } from '../coffee-dashboard/coffee-dashboard.component';
import { RangeSelectorComponent } from '../range-selector/range-selector.component';

describe('CoffeeMachineComponent', () => {
  let component: CoffeeMachineComponent;
  let fixture: ComponentFixture<CoffeeMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoffeeMachineComponent,
        InsertCoinsComponent,
        ChooseSugarComponent,
        DrinkOptionComponent,
        DrinkReadyComponent,
        CoffeeDashboardComponent,
        RangeSelectorComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
