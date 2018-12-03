import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAccountPageComponent } from './member-account-page.component';

describe('MemberAccountPageComponent', () => {
  let component: MemberAccountPageComponent;
  let fixture: ComponentFixture<MemberAccountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAccountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
