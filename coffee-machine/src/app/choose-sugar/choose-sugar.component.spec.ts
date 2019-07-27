import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSugarComponent } from './choose-sugar.component';

describe('DrinkOptionComponent', () => {
  let component: ChooseSugarComponent;
  let fixture: ComponentFixture<ChooseSugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseSugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
