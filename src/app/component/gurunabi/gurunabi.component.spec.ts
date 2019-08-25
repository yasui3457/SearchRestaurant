import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GurunabiComponent } from './gurunabi.component';

describe('GurunabiComponent', () => {
  let component: GurunabiComponent;
  let fixture: ComponentFixture<GurunabiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GurunabiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GurunabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
