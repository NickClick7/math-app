import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})



export class ButtonComponent {
  @Input() label: string = '';
  @Input() class: string  = '';
  @Output() onClick = new EventEmitter<any>();
  onClickButton() {
    this.onClick.emit();
  }
}
