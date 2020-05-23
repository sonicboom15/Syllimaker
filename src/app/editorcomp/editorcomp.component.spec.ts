import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorcompComponent } from './editorcomp.component';

describe('EditorcompComponent', () => {
  let component: EditorcompComponent;
  let fixture: ComponentFixture<EditorcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
