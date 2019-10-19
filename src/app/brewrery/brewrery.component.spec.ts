import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewreryComponent } from './brewrery.component';

describe('BrewreryComponent', () => {
  let component: BrewreryComponent;
  let fixture: ComponentFixture<BrewreryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrewreryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewreryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
