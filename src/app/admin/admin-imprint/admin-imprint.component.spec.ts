import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminImprintComponent } from './admin-imprint.component';

describe('AdminImprintComponent', () => {
  let component: AdminImprintComponent;
  let fixture: ComponentFixture<AdminImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminImprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
