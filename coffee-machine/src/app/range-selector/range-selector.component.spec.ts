import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSelectorComponent } from './range-selector.component';
import { ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('RangeSelectorComponent', () => {
  let component: RangeSelectorComponent;
  let fixture: ComponentFixture<RangeSelectorComponent>;
  let decrease: ElementRef;
  let increase: ElementRef;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    decrease = fixture.debugElement.query(By.css('#decrease'));
    increase = fixture.debugElement.query(By.css('#increase'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default cleatNumber set to 5', () => {
    expect(component.cleatNumber).toEqual(5);
  });
  it('should have cleatNumber and cleats.length set to 5', () => {
    expect(component.cleatNumber).toEqual(component.cleats.length);
  });
  it('should have default value set to 3', () => {
    expect(component.value).toEqual(3);
  });
  it('should have the value set to 2 after less click', async(() => {
    spyOn(component.valueChange, 'emit');

    fixture.whenStable().then(() => {
      decrease.nativeElement.click();

      expect(component.value).toEqual(2);
      expect(component.valueChange.emit).toHaveBeenCalledWith(2);
    });
  }));
  it('should have the value set to 4 after more click', async(() => {
    spyOn(component.valueChange, 'emit');

    fixture.whenStable().then(() => {
      increase.nativeElement.click();

      expect(component.value).toEqual(4);
      expect(component.valueChange.emit).toHaveBeenCalledWith(4);
    });
  }));
});
