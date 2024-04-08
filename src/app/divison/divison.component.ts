import { Component } from '@angular/core';
import { DIVISION } from '../constants';
import { OperationComponent } from '../shared/operation/operation.component';

@Component({
  selector: 'app-divison',
  standalone: true,
  imports: [OperationComponent],
  templateUrl: './divison.component.html',
  styleUrl: './divison.component.scss'
})
export class DivisonComponent {
  type: string = DIVISION
}
