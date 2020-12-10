import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomDetailComponent } from './kingdom-detail.component';

describe('KingdomDetailComponent', () => {
  let component: KingdomDetailComponent;
  let fixture: ComponentFixture<KingdomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
