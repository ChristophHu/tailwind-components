import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFiveComponent } from './route-five.component';

describe('RouteFiveComponent', () => {
  let component: RouteFiveComponent;
  let fixture: ComponentFixture<RouteFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteFiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
