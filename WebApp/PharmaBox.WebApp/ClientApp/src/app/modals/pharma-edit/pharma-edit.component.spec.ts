import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaEditComponent } from './pharma-edit.component';

describe('PharmaEditComponent', () => {
  let component: PharmaEditComponent;
  let fixture: ComponentFixture<PharmaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
