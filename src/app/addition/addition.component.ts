import { Component } from '@angular/core';
import { OperationComponent } from '../shared/operation/operation.component';
import { ADDITION } from '../constants';

@Component({
  selector: 'app-addition',
  standalone: true,
  imports: [OperationComponent],
  templateUrl: './addition.component.html',
  styleUrl: './addition.component.scss'
})
export class AdditionComponent {
  type: string = ADDITION;
}
