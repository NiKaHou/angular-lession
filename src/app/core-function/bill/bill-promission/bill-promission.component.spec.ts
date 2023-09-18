import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPromissionComponent } from './bill-promission.component';

describe('BillPromissionComponent', () => {
  let component: BillPromissionComponent;
  let fixture: ComponentFixture<BillPromissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillPromissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillPromissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
