import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSportsComponent } from './admin-sports.component';

describe('AdminSportsComponent', () => {
  let component: AdminSportsComponent;
  let fixture: ComponentFixture<AdminSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
