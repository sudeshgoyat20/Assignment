import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootHeadComponent } from './root-head.component';

describe('RootHeadComponent', () => {
  let component: RootHeadComponent;
  let fixture: ComponentFixture<RootHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
