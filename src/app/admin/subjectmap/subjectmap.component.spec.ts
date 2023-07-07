import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectmapComponent } from './subjectmap.component';

describe('SubjectmapComponent', () => {
  let component: SubjectmapComponent;
  let fixture: ComponentFixture<SubjectmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
