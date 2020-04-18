import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDBComponent } from './cards-db.component';

describe('CardsDBComponent', () => {
  let component: CardsDBComponent;
  let fixture: ComponentFixture<CardsDBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsDBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
