import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNgrxComponent } from './user-ngrx.component';

describe('UserNgrxComponent', () => {
  let component: UserNgrxComponent;
  let fixture: ComponentFixture<UserNgrxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNgrxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
