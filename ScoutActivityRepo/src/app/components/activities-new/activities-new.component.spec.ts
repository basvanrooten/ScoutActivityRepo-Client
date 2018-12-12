import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesNewComponent } from './activities-new.component';

describe('ActivitiesNewComponent', () => {
  let component: ActivitiesNewComponent;
  let fixture: ComponentFixture<ActivitiesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
