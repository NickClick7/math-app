import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { UserInputComponent } from '../shared/user-input/user-input.component';
import { OperationComponent } from '../shared/operation/operation.component';
import { MULTIPLICATION } from '../constants';


@Component({
  selector: 'app-multiplication',
  standalone: true,
  imports: [CommonModule, OperationComponent, ButtonComponent, UserInputComponent],
  templateUrl: './multiplication.component.html',
  styleUrl: './multiplication.component.scss'
})
export class MultiplicationComponent {
  type: string = MULTIPLICATION;
}
