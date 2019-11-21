import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPaymentsHistoryComponent } from './student-payments-history.component';

describe('StudentPaymentsHistoryComponent', () => {
  let component: StudentPaymentsHistoryComponent;
  let fixture: ComponentFixture<StudentPaymentsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentPaymentsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentPaymentsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
