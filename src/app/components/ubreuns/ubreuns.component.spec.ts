import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbreunsComponent } from './ubreuns.component';

describe('UbreunsComponent', () => {
  let component: UbreunsComponent;
  let fixture: ComponentFixture<UbreunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbreunsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbreunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
