import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOptionComponent } from './drink-option.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Coffee } from '../graphql/coffee';

describe('DrinkOptionComponent', () => {
  let component: DrinkOptionComponent;
  let fixture: ComponentFixture<DrinkOptionComponent>;
  let choose: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
    choose = fixture.debugElement.query(By.css('#choose'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have coffee set to undefined', () => {
    expect(component.coffee).toBeUndefined();
  });
  it('should be disabled by default', () => {
    expect(choose.nativeElement.disabled).toBe(true);
  });
  it('should be enable setting the coffee', () => {
    let coffee: Coffee = {
      available: true,
      coffeePowder: 1,
      milk: 0,
      price: 30,
      name: "Coffee",
      sugar: 3
    };
    component.coffee = coffee;

    fixture.detectChanges();

    expect(choose.nativeElement.disabled).toBe(false);
  });
  it('should be return the set coffee after drink click', () => {
    let coffee: Coffee = {
      available: true,
      coffeePowder: 1,
      milk: 0,
      price: 30,
      name: "Coffee",
      sugar: 3
    };
    component.coffee = coffee;

    fixture.detectChanges();

    spyOn(component.drinkRequested, 'emit');
    fixture.whenStable().then(() => {
      choose.nativeElement.click();

      expect(component.drinkRequested.emit).toHaveBeenCalledWith(coffee);
    });
  });
});
