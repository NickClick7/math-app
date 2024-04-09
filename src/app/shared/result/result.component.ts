import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent {
  @Input() checked: boolean;
  @Input() success: boolean;
  @Input() displayCorrection: boolean;
  @Input() number1: number | null;
  @Input() number2: number | null;
  @Input() result: number | null;
  @Input() operator: string;
}
