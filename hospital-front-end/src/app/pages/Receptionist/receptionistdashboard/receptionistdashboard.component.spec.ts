import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistdashboardComponent } from './receptionistdashboard.component';

describe('ReceptionistdashboardComponent', () => {
  let component: ReceptionistdashboardComponent;
  let fixture: ComponentFixture<ReceptionistdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceptionistdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
