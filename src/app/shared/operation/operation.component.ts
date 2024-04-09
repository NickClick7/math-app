import { Component, Input, OnInit } from '@angular/core';
import { UserInputComponent } from '../user-input/user-input.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { MultiplicationService } from '../../multiplication/multiplication.service';
import { Router } from '@angular/router';
import { ADDITION, DIVISION, MULTIPLICATION, SUBTRACTION } from '../../constants';
import { AdditionService } from '../../addition/addition.service';
import { SubtractionService } from '../../subtraction/subtraction.service';
import { DivisionService } from '../../divison/divison.service';
import { ResultComponent } from '../result/result.component';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-operation',
  standalone: true,
  imports: [CommonModule, ButtonComponent, UserInputComponent, ResultComponent, TimerComponent],
  templateUrl: './operation.component.html',
  styleUrl: './operation.component.scss'
})
export class OperationComponent implements OnInit {
  @Input() type: string = '';
  operator: string = '';
  nrOfExample: number = 0;

  number1: number | null = null;
  number2: number | null = null;
  result: number | null = null;
  userResult: string | '' = '';
  success: boolean = false;
  checked: boolean = false;
  displayStartButton: boolean = true;
  displayCorrection: boolean = false;
  disableInput: boolean = true;
  nrOfCorrect: number = 0;
  nrOfIncorrect: number = 0;
  displayStatistics: boolean = false;
  displayTimer: boolean = false;
  stopTimer: boolean = false;
  
  constructor(
    private multiplicationService: MultiplicationService, 
    private additionService: AdditionService,
    private subtractionService: SubtractionService,
    private divisionService: DivisionService,
    private router: Router
  ) {}
  ngOnInit() {
    if (this.type === MULTIPLICATION) {
      this.operator = "x"
    }
    if (this.type === ADDITION) {
      this.operator = "+"
    }
    if (this.type === SUBTRACTION) {
      this.operator = "-"
    }
    if (this.type === DIVISION) {
      this.operator = ":"
    }
  }

  resetProps() {
    this.checked = false;
    this.userResult = '';
    this.nrOfCorrect = 0;
    this.nrOfIncorrect = 0;
    this.nrOfExample = 0;
    this.displayStartButton = false;
    this.displayStatistics = false;
    this.displayTimer = true;
    this.stopTimer = false;
  }

  startPractice() {
    this.resetProps();
    this.generateNumbers()
  }

  generateNumbers() {
    this.checked = false;
    this.disableInput = false;
    this.userResult = '';
    this.displayCorrection = false;
    if (this.nrOfExample < 10) {
      this.nrOfExample += 1;
      if (this.type === MULTIPLICATION) {
        this.number1 = this.multiplicationService.createNumber();
        this.number2 = this.multiplicationService.createNumber();
        this.result = this.multiplicationService.multiply(this.number1, this.number2);
      }
      if (this.type === ADDITION) {
        this.number1 = this.additionService.createNumber1();
        this.number2 = this.additionService.createNumber2(this.number1);
        this.result = this.additionService.add(this.number1, this.number2);
      }
      if (this.type === SUBTRACTION) {
        this.number1 = this.subtractionService.createNumber1();
        this.number2 = this.subtractionService.createNumber2(this.number1);
        this.result = this.subtractionService.subtract(this.number1, this.number2);
      }
      if (this.type === DIVISION) {
        let num1 = this.divisionService.createNumber();
        let num2 = this.divisionService.createNumber();
        this.result = this.multiplicationService.multiply(num1, num2);
        this.number1 = this.result;
        this.number2 = num1;
        this.result = this.divisionService.divide(this.number1, this.number2)
      }
    } else {
      this.displayStatistics = true;
      this.displayStartButton = true;
    }
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
    if (this.nrOfExample === 10) {
      this.stopTimer = true;
    }
    if (this.success === true) {
      this.nrOfCorrect += 1;
      this.disableInput = true;
      setTimeout(() => {
        this.generateNumbers();
      }, 2000)
    } else {
      this.nrOfIncorrect += 1;
      this.disableInput = true;
      setTimeout(() => {
        this.displayCorrection = true;
        setTimeout(() => {
          this.generateNumbers();
        }, 2000)
      }, 2000)
    }
  }

  redirect() {
    this.router.navigate(['/']);
  }
}
