import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodViewMarksComponent } from './hod-view-marks.component';

describe('HodViewMarksComponent', () => {
  let component: HodViewMarksComponent;
  let fixture: ComponentFixture<HodViewMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodViewMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodViewMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
