import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockmarksComponent } from './lockmarks.component';

describe('LockmarksComponent', () => {
  let component: LockmarksComponent;
  let fixture: ComponentFixture<LockmarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockmarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
