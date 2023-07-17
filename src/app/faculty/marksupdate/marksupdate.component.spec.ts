import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksupdateComponent } from './marksupdate.component';

describe('MarksupdateComponent', () => {
  let component: MarksupdateComponent;
  let fixture: ComponentFixture<MarksupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarksupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarksupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
