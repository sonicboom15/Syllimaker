import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopiccompComponent } from './topiccomp.component';

describe('TopiccompComponent', () => {
  let component: TopiccompComponent;
  let fixture: ComponentFixture<TopiccompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopiccompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopiccompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
