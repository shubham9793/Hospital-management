import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoctorsAppointmentComponent } from './show-doctors-appointment.component';

describe('ShowDoctorsAppointmentComponent', () => {
  let component: ShowDoctorsAppointmentComponent;
  let fixture: ComponentFixture<ShowDoctorsAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDoctorsAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDoctorsAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
