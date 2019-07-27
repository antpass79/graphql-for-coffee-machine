import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertCoinsComponent } from './insert-coins.component';

describe('InsertCoinsComponent', () => {
  let component: InsertCoinsComponent;
  let fixture: ComponentFixture<InsertCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
