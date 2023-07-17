import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuprofileComponent } from './stuprofile.component';

describe('StuprofileComponent', () => {
  let component: StuprofileComponent;
  let fixture: ComponentFixture<StuprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
