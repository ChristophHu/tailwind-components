import { AfterViewInit, Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core'
import { IconsComponent } from '../../../shared/components/icons/icons.component'
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'
import { NgFor } from '@angular/common'
import { RadialFloatingMenuComponent } from '../radial-floating-menu/radial-floating-menu.component'

interface Link {
  id: number
  path: string
  icon: string
  label: string
  disabled: boolean
}

@Component({
  selector: 'tabbar-tubelight',
  standalone: true,
  imports: [
    IconsComponent,
    NgFor,
    RadialFloatingMenuComponent,
    RouterModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './tubelight.component.html',
  styleUrl: './tubelight.component.sass'
})
export class TubelightComponent implements AfterViewInit {
  @Input() links: Link[] = [
    { id: 1, path: '', icon: 'arrow-left', label: 'Arrow', disabled: false },
    { id: 2, path: '/two', icon: 'redux', label: 'Redux', disabled: false },
    { id: 3, path: '/three', icon: 'map', label: 'Map', disabled: false },
    { id: 4, path: '/four', icon: 'notes', label: 'Notes', disabled: false },
    { id: 5, path: '/five', icon: 'settings', label: 'Settings', disabled: false }
  ]
  @ViewChild('tubelight') tubelight!: ElementRef

  ngAfterViewInit() {
    this.tubelight.nativeElement.style.width = `${100 / this.links.length}%`
  }

  setActive(index: number) {
    const light = this.tubelight.nativeElement
    light.style.left = `${index * 100 / this.links.length}%`
  }
}
