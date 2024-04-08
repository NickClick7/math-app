import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultiplicationService {

  constructor() { }

  createNumber(): number {
    return Math.floor(Math.random() * 11 + 0)
  }
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
}
