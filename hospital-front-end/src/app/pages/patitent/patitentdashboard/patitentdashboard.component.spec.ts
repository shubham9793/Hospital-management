import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatitentdashboardComponent } from './patitentdashboard.component';

describe('PatitentdashboardComponent', () => {
  let component: PatitentdashboardComponent;
  let fixture: ComponentFixture<PatitentdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatitentdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatitentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
