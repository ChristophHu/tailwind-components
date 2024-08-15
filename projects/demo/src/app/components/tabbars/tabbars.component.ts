import { Component } from '@angular/core';
import { TubelightComponent } from './tubelight/tubelight.component';
import { StaticNRadialComponent } from './static-n-radial/static-n-radial.component';

@Component({
  selector: 'tabbars',
  standalone: true,
  imports: [
    StaticNRadialComponent,
    TubelightComponent
  ],
  templateUrl: './tabbars.component.html',
  styleUrl: './tabbars.component.sass'
})
export class TabbarsComponent {

}
