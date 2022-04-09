import { ComponentFixture, TestBed } from '@angular/core/testing';

import { contactusComponent } from './contactus.component';

describe('contactusComponent', () => {
  let component: contactusComponent;
  let fixture: ComponentFixture<contactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ contactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(contactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
