import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireShowComponent } from './empire-show.component';

describe('EmpireShowComponent', () => {
  let component: EmpireShowComponent;
  let fixture: ComponentFixture<EmpireShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpireShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
