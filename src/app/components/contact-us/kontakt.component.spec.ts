import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusComponnet } from './kontakt.component';

describe('KontaktComponent', () => {
  let component: ContactusComponnet;
  let fixture: ComponentFixture<ContactusComponnet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactusComponnet ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusComponnet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
