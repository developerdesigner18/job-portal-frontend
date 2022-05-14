import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStadtComponent } from './admin-stadt.component';

describe('AdminStadtComponent', () => {
  let component: AdminStadtComponent;
  let fixture: ComponentFixture<AdminStadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStadtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
