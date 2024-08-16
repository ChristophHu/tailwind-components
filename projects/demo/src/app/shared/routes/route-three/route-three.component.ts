import { Component } from '@angular/core';
import { TabsComponent } from '../../../components/tabs/tabs.component';

@Component({
  selector: 'app-route-three',
  standalone: true,
  imports: [
    TabsComponent
  ],
  templateUrl: './route-three.component.html',
  styleUrl: './route-three.component.sass'
})
export class RouteThreeComponent {

}
