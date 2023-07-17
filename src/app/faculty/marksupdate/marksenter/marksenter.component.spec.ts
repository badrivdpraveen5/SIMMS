import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksenterComponent } from './marksenter.component';

describe('MarksenterComponent', () => {
  let component: MarksenterComponent;
  let fixture: ComponentFixture<MarksenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
