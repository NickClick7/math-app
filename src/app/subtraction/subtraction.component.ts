import { Component } from '@angular/core';
import { SUBTRACTION } from '../constants';
import { OperationComponent } from '../shared/operation/operation.component';

@Component({
  selector: 'app-subtraction',
  standalone: true,
  imports: [OperationComponent],
  templateUrl: './subtraction.component.html',
  styleUrl: './subtraction.component.scss'
})
export class SubtractionComponent {
  type: string = SUBTRACTION
}
