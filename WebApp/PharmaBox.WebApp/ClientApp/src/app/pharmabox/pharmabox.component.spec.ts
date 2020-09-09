import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaboxComponent } from './pharmabox.component';

describe('PharmaboxComponent', () => {
  let component: PharmaboxComponent;
  let fixture: ComponentFixture<PharmaboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
