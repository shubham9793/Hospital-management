import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistWelcomeComponent } from './receptionist-welcome.component';

describe('ReceptionistWelcomeComponent', () => {
  let component: ReceptionistWelcomeComponent;
  let fixture: ComponentFixture<ReceptionistWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionistWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
