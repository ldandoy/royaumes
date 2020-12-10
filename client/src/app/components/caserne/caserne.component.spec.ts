import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaserneComponent } from './caserne.component';

describe('CaserneComponent', () => {
  let component: CaserneComponent;
  let fixture: ComponentFixture<CaserneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaserneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaserneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
