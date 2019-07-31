import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSugarComponent } from './choose-sugar.component';
import { RangeSelectorComponent } from '../range-selector/range-selector.component';

describe('ChooseSugarComponent', () => {
  let component: ChooseSugarComponent;
  let fixture: ComponentFixture<ChooseSugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChooseSugarComponent,
        RangeSelectorComponent
      ]
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
