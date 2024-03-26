import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nrOfExample: number = 0;
  inputNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  number1: number | null = null;
  number2: number | null = null;
  result: number | null = null;
  userResult: string | '' = '';
  success: boolean = false;
  checked: boolean = false;
  displayStartButton: boolean = true;
  displayCorrection: boolean = false;
  nrOfCorrect: number = 0;
  nrOfIncorrect: number = 0;
  displayStatistics: boolean = false;
  
  constructor(private homeService: HomeService) {}

  resetProps() {
    this.checked = false;
    this.userResult = '';
    this.nrOfCorrect = 0;
    this.nrOfIncorrect = 0;
    this.nrOfExample = 0;
    this.displayStartButton = false;
    this.displayStatistics = false;
  }

  generateNumbers() {
    this.checked = false;
    this.userResult = '';
    this.displayCorrection = false;
    if (this.nrOfExample < 10) {
      this.nrOfExample += 1;
      this.number1 = this.homeService.createNumber();
      this.number2 = this.homeService.createNumber();
      this.result = this.homeService.multiply(this.number1, this.number2);
    } else {
      this.displayStatistics = true;
      this.displayStartButton = true;
    }
  }
  
  startMultiplications() {
    this.resetProps();
    this.generateNumbers();
  }
  createResult(num: number) {
    this.userResult += num.toString();
  }

  modifyResult() {
    this.userResult = this.userResult.slice(0, -1);
  }


  checkResult() {
    this.success = this.result === Number(this.userResult)
    this.checked = true
    this.userResult = '';
    if (this.success === true) {
      this.nrOfCorrect += 1;
      setTimeout(() => {
        this.generateNumbers();
      }, 2000)
    } else {
      this.nrOfIncorrect += 1;
      setTimeout(() => {
        this.displayCorrection = true;
        setTimeout(() => {
          this.generateNumbers();
        }, 2000)
      }, 2000)
    }
  }
}
