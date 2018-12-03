import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuPageComponent } from './order-menu-page.component';

describe('OrderMenuPageComponent', () => {
  let component: OrderMenuPageComponent;
  let fixture: ComponentFixture<OrderMenuPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMenuPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
