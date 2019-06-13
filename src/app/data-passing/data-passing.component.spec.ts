import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPassingComponent } from './data-passing.component';

describe('DataPassingComponent', () => {
  let component: DataPassingComponent;
  let fixture: ComponentFixture<DataPassingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPassingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
