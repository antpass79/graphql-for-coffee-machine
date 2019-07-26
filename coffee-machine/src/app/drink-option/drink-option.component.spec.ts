import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkOptionComponent } from './drink-option.component';

describe('DrinkOptionComponent', () => {
  let component: DrinkOptionComponent;
  let fixture: ComponentFixture<DrinkOptionComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
