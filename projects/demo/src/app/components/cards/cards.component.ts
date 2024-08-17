import { Component } from '@angular/core';
import { CardCarousel1Component } from './card-carousel-1/card-carousel-1.component';

@Component({
  selector: 'cards',
  standalone: true,
  imports: [
    CardCarousel1Component
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.sass'
})
export class CardsComponent {

}
