import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TubelightComponent } from './tubelight.component';

describe('TubelightComponent', () => {
  let component: TubelightComponent;
  let fixture: ComponentFixture<TubelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TubelightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TubelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
