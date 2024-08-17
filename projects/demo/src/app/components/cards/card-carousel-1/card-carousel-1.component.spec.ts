import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarousel1Component } from './card-carousel-1.component';

describe('CardCarousel1Component', () => {
  let component: CardCarousel1Component;
  let fixture: ComponentFixture<CardCarousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarousel1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
