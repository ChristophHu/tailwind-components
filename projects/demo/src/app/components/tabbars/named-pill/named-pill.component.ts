import { Component, Input } from '@angular/core';
import { IconsComponent } from '../../../shared/components/icons/icons.component';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface Link {
  id: number
  path: string
  icon: string
  label: string
  indicator: number
  disabled: boolean
}

@Component({
  selector: 'tabbar-named-pill',
  standalone: true,
  imports: [
    IconsComponent,
    NgClass,
    NgFor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './named-pill.component.html',
  styleUrl: './named-pill.component.sass'
})
export class NamedPillComponent {
  @Input() links: Link[] = [
    { id: 1, path: '', icon: 'arrow-left', label: 'Arrow', indicator: 0, disabled: false },
    { id: 2, path: '/two', icon: 'redux', label: 'Redux', indicator: 1, disabled: false },
    { id: 3, path: '/three', icon: 'map', label: 'Map', indicator: 0, disabled: false },
    { id: 4, path: '/four', icon: 'notes', label: 'Notes', indicator: 0, disabled: false },
    { id: 5, path: '/five', icon: 'settings', label: 'Settings', indicator: 0, disabled: false }
  ]
}
