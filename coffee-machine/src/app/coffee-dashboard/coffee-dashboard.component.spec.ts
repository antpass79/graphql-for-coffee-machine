import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeDashboardComponent } from './coffee-dashboard.component';

describe('CoffeeDashboardComponent', () => {
  let component: CoffeeDashboardComponent;
  let fixture: ComponentFixture<CoffeeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
