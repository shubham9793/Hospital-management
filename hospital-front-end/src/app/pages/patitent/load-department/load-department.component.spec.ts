import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDepartmentComponent } from './load-department.component';

describe('LoadDepartmentComponent', () => {
  let component: LoadDepartmentComponent;
  let fixture: ComponentFixture<LoadDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
