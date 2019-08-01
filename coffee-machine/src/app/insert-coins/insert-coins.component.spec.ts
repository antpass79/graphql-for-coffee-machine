import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoinsComponent } from './insert-coins.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InsertCoinsComponent', () => {
  let component: InsertCoinsComponent;
  let fixture: ComponentFixture<InsertCoinsComponent>;
  let insert5: ElementRef;
  let insert10: ElementRef;
  let insert20: ElementRef;
  let insert50: ElementRef;
  let reset: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertCoinsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    insert5 = fixture.debugElement.query(By.css('#insert5'));
    insert10 = fixture.debugElement.query(By.css('#insert10'));
    insert20 = fixture.debugElement.query(By.css('#insert20'));
    insert50 = fixture.debugElement.query(By.css('#insert50'));
    reset = fixture.debugElement.query(By.css('#reset'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the default coins set to 0', () => {
    expect(component.coins).toEqual(0);
  });
  it('should have the coins set to 5 after insert5 click', () => {
    spyOn(component.coinsChange, 'emit');

    fixture.whenStable().then(() => {
      insert5.nativeElement.click();

      expect(component.coins).toEqual(5);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(5);
    });
  });
  it('should have the coins set to 10 after insert10 click', () => {
    spyOn(component.coinsChange, 'emit');

    fixture.whenStable().then(() => {
      insert10.nativeElement.click();

      expect(component.coins).toEqual(10);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(10);
    });
  });
  it('should have the coins set to 20 after insert20 click', () => {
    spyOn(component.coinsChange, 'emit');

    fixture.whenStable().then(() => {
      insert20.nativeElement.click();

      expect(component.coins).toEqual(20);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(20);
    });
  });
  it('should have the coins set to 50 after insert50 click', () => {
    spyOn(component.coinsChange, 'emit');

    fixture.whenStable().then(() => {
      insert50.nativeElement.click();

      expect(component.coins).toEqual(50);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(50);
    });
  });
  it('should have the coins set to 0 after reset click', () => {
    spyOn(component.coinsChange, 'emit');
    component.coins = 50;

    fixture.whenStable().then(() => {
      reset.nativeElement.click();

      expect(component.coins).toEqual(0);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(0);
    });
  });
  it('should have the coins set to 85 after all insert clicks', () => {
    spyOn(component.coinsChange, 'emit');

    fixture.whenStable().then(() => {
      insert5.nativeElement.click();
      insert10.nativeElement.click();
      insert20.nativeElement.click();
      insert50.nativeElement.click();

      expect(component.coins).toEqual(85);
      expect(component.coinsChange.emit).toHaveBeenCalledWith(85);
    });
  });
});
