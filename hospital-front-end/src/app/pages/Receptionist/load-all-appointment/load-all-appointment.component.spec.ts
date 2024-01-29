import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllAppointmentComponent } from './load-all-appointment.component';

describe('LoadAllAppointmentComponent', () => {
  let component: LoadAllAppointmentComponent;
  let fixture: ComponentFixture<LoadAllAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAllAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAllAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
