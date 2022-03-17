import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadComponent } from './stad.component';

describe('StadComponent', () => {
  let component: StadComponent;
  let fixture: ComponentFixture<StadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
