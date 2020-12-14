import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireAttaqueComponent } from './empire-attaque.component';

describe('EmpireAttaqueComponent', () => {
  let component: EmpireAttaqueComponent;
  let fixture: ComponentFixture<EmpireAttaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpireAttaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpireAttaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
