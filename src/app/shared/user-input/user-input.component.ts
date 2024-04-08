import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {
  inputNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  @Input() disabled = true;
  @Output() onCreateResult = new EventEmitter<any>();
  @Output() onModifyResult = new EventEmitter<any>();
  @Output() onCheckResult = new EventEmitter<any>();

  createResult(number: Number) {
    this.onCreateResult.emit(number);
  }
  modifyResult() {
    this.onModifyResult.emit()
  }
  checkResult() {
    this.onCheckResult.emit()
  }

}
