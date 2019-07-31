import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeSelectorComponent } from './range-selector.component';
import { ElementRef } from '@angular/core';

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
    let de = fixture.debugElement;
    decrease = de..query("#decrease");
    increase = de.query(By.css('button'));
    fixture.detectChanges();
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
  it('should have the value set to 3', () => {
    spyOn('#decrease', 'click');
    expect(component.value).toEqual(4);
  });
});
