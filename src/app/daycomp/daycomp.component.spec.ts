import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaycompComponent } from './daycomp.component';

describe('DaycompComponent', () => {
  let component: DaycompComponent;
  let fixture: ComponentFixture<DaycompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaycompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
