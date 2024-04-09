import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnChanges{
  @Input() stopTimer: boolean = false;
  num: number = 0;
  second: number = 0;
  minute: number = 0;
  displayedTime: string = '00:00';
  timer: any;

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.stopTimer)
    if (changes['stopTimer'] && this.stopTimer) {
      clearInterval(this.timer)
    }
    if (changes['stopTimer'] && !this.stopTimer) {
      this.num = 0;
      this.second = 0;
      this.minute = 0;
      this.displayedTime = '00:00';
      this.timer = setInterval(() => this.numIncrement(), 1000)
    }
  }

  numIncrement() {
    this.num++;
    if (this.num % 60 === 0) {
      this.minute += 1;
      this.second = 0;
    } else {
      this.second++;
    }
    this.displayedTime = this.formatTime(this.minute, this.second)
  }

  formatTime(min: number, sec: number): string {
    let minute = min < 10 ? `0${min}` : `${min}`
    let second = sec < 10 ? `0${sec}` : `${sec}`
    return `${minute}:${second}`
  }

  ngOnDestroy(): void {
    clearInterval(this.timer)
  }
}
