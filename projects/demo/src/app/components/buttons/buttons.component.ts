import { Component } from '@angular/core';
import { BubblyButtonComponent } from './bubbly-button/bubbly-button.component';

@Component({
  selector: 'buttons',
  standalone: true,
  imports: [
    BubblyButtonComponent
  ],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.sass'
})
export class ButtonsComponent {

}
