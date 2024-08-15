import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFourComponent } from './route-four.component';

describe('RouteFourComponent', () => {
  let component: RouteFourComponent;
  let fixture: ComponentFixture<RouteFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouteFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
