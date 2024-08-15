import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tablist',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './tablist.component.html',
  styleUrl: './tablist.component.sass'
})
export class TablistComponent {
  @Input() items: Array<any> = []
  @Input() labelField: string = ''
  @Input() active: any;
  @Output() onTabSelect: EventEmitter<any> = new EventEmitter();

  select(tab: any) {
    this.onTabSelect.emit(tab);
  }
}
