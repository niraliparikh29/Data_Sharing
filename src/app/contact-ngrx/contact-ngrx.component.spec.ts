import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactNgrxComponent } from './contact-ngrx.component';

describe('ContactNgrxComponent', () => {
  let component: ContactNgrxComponent;
  let fixture: ComponentFixture<ContactNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
