import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subject2Component } from './subject2.component';

describe('Subject2Component', () => {
  let component: Subject2Component;
  let fixture: ComponentFixture<Subject2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subject2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
