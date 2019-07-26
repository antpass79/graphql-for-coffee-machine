import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkReadyComponent } from './drink-ready.component';

describe('DrinkReadyComponent', () => {
  let component: DrinkReadyComponent;
  let fixture: ComponentFixture<DrinkReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
