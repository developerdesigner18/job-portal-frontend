import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsPartnerComponent } from './sports-partner.component';

describe('SportsPartnerComponent', () => {
  let component: SportsPartnerComponent;
  let fixture: ComponentFixture<SportsPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
