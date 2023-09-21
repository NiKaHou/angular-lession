import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTestComponent } from './bill-test.component';

describe('BillTestComponent', () => {
  let component: BillTestComponent;
  let fixture: ComponentFixture<BillTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
