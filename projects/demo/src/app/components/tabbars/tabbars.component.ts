import { Component } from '@angular/core';
import { TubelightComponent } from './tubelight/tubelight.component';
import { StaticNRadialComponent } from './static-n-radial/static-n-radial.component';
import { RadialFloatingMenuComponent } from './radial-floating-menu/radial-floating-menu.component';
import { SteamComponent } from './steam/steam.component';

@Component({
  selector: 'tabbars',
  standalone: true,
  imports: [
    RadialFloatingMenuComponent,
    StaticNRadialComponent,
    SteamComponent,
    TubelightComponent
  ],
  templateUrl: './tabbars.component.html',
  styleUrl: './tabbars.component.sass'
})
export class TabbarsComponent {

}
