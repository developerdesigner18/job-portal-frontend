import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsBlogsComponent } from './sports-blogs.component';

describe('SportsBlogsComponent', () => {
  let component: SportsBlogsComponent;
  let fixture: ComponentFixture<SportsBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
