import { Component } from '@angular/core';
import { TubelightComponent } from './tubelight/tubelight.component';

@Component({
  selector: 'tabbars',
  standalone: true,
  imports: [
    TubelightComponent
  ],
  templateUrl: './tabbars.component.html',
  styleUrl: './tabbars.component.sass'
})
export class TabbarsComponent {

}
