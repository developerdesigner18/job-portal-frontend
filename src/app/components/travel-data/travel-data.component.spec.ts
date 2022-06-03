import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDataComponent } from './travel-data.component';

describe('TravelDataComponent', () => {
  let component: TravelDataComponent;
  let fixture: ComponentFixture<TravelDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
