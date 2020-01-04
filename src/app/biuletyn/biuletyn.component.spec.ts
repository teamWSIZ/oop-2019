import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiuletynComponent } from './biuletyn.component';

describe('BiuletynComponent', () => {
  let component: BiuletynComponent;
  let fixture: ComponentFixture<BiuletynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiuletynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiuletynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
