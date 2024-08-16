import { Component, ElementRef, Input, ViewChild, viewChild } from '@angular/core'
import { IconsComponent } from '../../../shared/components/icons/icons.component'
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'static-n-radial',
  standalone: true,
  imports: [
    IconsComponent,
    NgFor,
    NgIf
  ],
  templateUrl: './static-n-radial.component.html',
  styleUrl: './static-n-radial.component.sass'
})
export class StaticNRadialComponent {
  @Input() links: any[] = [
    { icon: 'home', link: 'home' }
  ]
  isOpen: boolean = false
  @ViewChild('red') red!: ElementRef

  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  // ngAfterViewInit() {
  //   this.red.nativeElement.style.right = `${20}%`
  // }

  // setActive(index: number) {
  //   const light = this.tubelight.nativeElement
  //   light.style.left = `${index * 100 / this.links.length}%`
  // }

  open() {
    this.isOpen = true
    this.red.nativeElement.style.right = `${150}%`
    this.red.nativeElement.style.scale = `${1}`
  }

  close() {
    this.isOpen = false
    this.red.nativeElement.style.right = `${0}%`
    this.red.nativeElement.style.scale = `${.8}`
  }
}

