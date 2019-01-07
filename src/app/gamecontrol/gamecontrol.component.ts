import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() timer = new EventEmitter<number>();
  interval;
  startCount = 1;
  constructor() { }

  ngOnInit() {
  }

  onStartTimer() {
    this.interval = setInterval(() => {
      this.timer.emit(this.startCount);
      this.startCount++;
    }, 1000);
  }

  onStopTimer() {
    clearInterval(this.interval);
  }
}
