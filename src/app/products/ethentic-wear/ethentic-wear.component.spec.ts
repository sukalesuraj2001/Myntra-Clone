import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthenticWearComponent } from './ethentic-wear.component';

describe('EthenticWearComponent', () => {
  let component: EthenticWearComponent;
  let fixture: ComponentFixture<EthenticWearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EthenticWearComponent]
    });
    fixture = TestBed.createComponent(EthenticWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
