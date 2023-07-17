import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyregComponent } from './facultyreg.component';

describe('FacultyregComponent', () => {
  let component: FacultyregComponent;
  let fixture: ComponentFixture<FacultyregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
