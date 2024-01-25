import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorsDetailsComponent } from './update-doctors-details.component';

describe('UpdateDoctorsDetailsComponent', () => {
  let component: UpdateDoctorsDetailsComponent;
  let fixture: ComponentFixture<UpdateDoctorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDoctorsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDoctorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
