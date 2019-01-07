import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-databinding';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onTimer(timerValue: number){
    if (timerValue % 2 === 0) {
      this.evenNumbers.push(timerValue);
    }
    else{
      this.oddNumbers.push(timerValue);
    }
  }
}
