import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoffeeMachineComponent } from './coffee-machine/coffee-machine.component';
import { CoffeeDashboardComponent } from './coffee-dashboard/coffee-dashboard.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';
import { InsertCoinsComponent } from './insert-coins/insert-coins.component';
import { ChooseSugarComponent } from './choose-sugar/choose-sugar.component';
import { DrinkOptionComponent } from './drink-option/drink-option.component';
import { DrinkReadyComponent } from './drink-ready/drink-ready.component';
import { Apollo } from 'apollo-angular';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CoffeeMachineComponent,
        InsertCoinsComponent,
        ChooseSugarComponent,
        DrinkOptionComponent,
        DrinkReadyComponent,
        CoffeeDashboardComponent,
        RangeSelectorComponent
      ],
      providers: [
        Apollo
      ]
    }).compileComponents();
  }));
  xit('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
