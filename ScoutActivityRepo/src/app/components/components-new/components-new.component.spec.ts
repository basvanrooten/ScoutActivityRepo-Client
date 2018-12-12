import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsNewComponent } from './components-new.component';

describe('ComponentsNewComponent', () => {
  let component: ComponentsNewComponent;
  let fixture: ComponentFixture<ComponentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
