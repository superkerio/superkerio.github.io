import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormElementsComponent } from './basic-form-elements.component';

describe('BasicFormElementsComponent', () => {
  let component: BasicFormElementsComponent;
  let fixture: ComponentFixture<BasicFormElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
