import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppboiComponent } from './appboi.component';

describe('AppboiComponent', () => {
  let component: AppboiComponent;
  let fixture: ComponentFixture<AppboiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppboiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppboiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
