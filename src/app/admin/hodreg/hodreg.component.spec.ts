import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodregComponent } from './hodreg.component';

describe('HodregComponent', () => {
  let component: HodregComponent;
  let fixture: ComponentFixture<HodregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
