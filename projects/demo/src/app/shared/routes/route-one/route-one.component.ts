import { Component } from '@angular/core';
import { ButtonsComponent } from '../../../components/buttons/buttons.component';

@Component({
  selector: 'app-route-one',
  standalone: true,
  imports: [
    ButtonsComponent
  ],
  templateUrl: './route-one.component.html',
  styleUrl: './route-one.component.sass'
})
export class RouteOneComponent {

}
