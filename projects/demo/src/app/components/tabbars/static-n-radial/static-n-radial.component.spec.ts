import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticNRadialComponent } from './static-n-radial.component';

describe('StaticNRadialComponent', () => {
  let component: StaticNRadialComponent;
  let fixture: ComponentFixture<StaticNRadialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticNRadialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticNRadialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
