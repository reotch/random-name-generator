import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandoNameComponent } from './rando-name.component';

describe('RandoNameComponent', () => {
  let component: RandoNameComponent;
  let fixture: ComponentFixture<RandoNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandoNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
