import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThingThreeComponent } from './thing-three.component';

describe('ThingThreeComponent', () => {
  let component: ThingThreeComponent;
  let fixture: ComponentFixture<ThingThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThingThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
