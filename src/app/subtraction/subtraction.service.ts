import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubtractionService {

  constructor() { }

  createNumber1(): number {
    return Math.floor(Math.random() * 101 + 0)
  }
  createNumber2(num1: number): number {
    const max = num1 +1;
    return Math.floor(Math.random() * max + 0)
  }
  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
}
