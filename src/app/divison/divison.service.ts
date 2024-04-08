import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }

  createNumber(): number {
    return Math.floor(Math.random() * 10 + 1)
  }
  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
}
