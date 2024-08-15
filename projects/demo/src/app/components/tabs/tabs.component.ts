import { Component } from '@angular/core';
import { TablistComponent } from './tablist/tablist.component';

@Component({
  selector: 'tabs',
  standalone: true,
  imports: [
    TablistComponent
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.sass'
})
export class TabsComponent {

  list = [
    { id: 1001, username: 'Mario', desc: 'Mario is an italian guy ...' },
    { id: 1002, username: 'Fabio', desc: 'Fabio is a JS developer ...' },
  ]

  active = this.list[0]

  changeTab(tab: any) {
    this.active = tab;
  }
}
