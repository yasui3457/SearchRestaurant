import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotPepperComponent } from './hot-pepper.component';

describe('HotPepperComponent', () => {
  let component: HotPepperComponent;
  let fixture: ComponentFixture<HotPepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotPepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
