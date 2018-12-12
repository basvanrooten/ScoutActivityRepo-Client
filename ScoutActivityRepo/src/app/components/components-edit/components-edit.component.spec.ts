import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsEditComponent } from './components-edit.component';

describe('ComponentsEditComponent', () => {
  let component: ComponentsEditComponent;
  let fixture: ComponentFixture<ComponentsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
