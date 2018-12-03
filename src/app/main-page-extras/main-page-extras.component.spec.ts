import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageExtrasComponent } from './main-page-extras.component';

describe('MainPageExtrasComponent', () => {
  let component: MainPageExtrasComponent;
  let fixture: ComponentFixture<MainPageExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
