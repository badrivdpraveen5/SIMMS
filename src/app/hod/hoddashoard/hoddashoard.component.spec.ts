import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoddashoardComponent } from './hoddashoard.component';

describe('HoddashoardComponent', () => {
  let component: HoddashoardComponent;
  let fixture: ComponentFixture<HoddashoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoddashoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoddashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
