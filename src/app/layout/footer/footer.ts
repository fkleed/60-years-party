import { Component } from '@angular/core';
import { interval, map, Observable, shareReplay } from 'rxjs';
import { AsyncPipe } from '@angular/common';


interface TimeComponents {
  secondsToDday: number;
  minutesToDday: number;
  hoursToDday: number;
  daysToDday: number;
}

@Component({
  selector: 'app-footer',
  imports: [AsyncPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  public timeLeft$: Observable<TimeComponents>;

  constructor() {
    this.timeLeft$ = interval(1000).pipe(
      map(x => this.calcDateDiff()),
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  calcDateDiff(endDay: Date = new Date(2026, 4, 23, 18, 0, 0)): TimeComponents {
    const dDay = endDay.valueOf();

    const milliSecondsInASecond = 1000;
    const hoursInADay = 24;
    const minutesInAnHour = 60;
    const secondsInAMinute = 60;

    const timeDifference = dDay - Date.now();

    const daysToDday = Math.floor(
      timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute * hoursInADay)
    );

    const hoursToDday = Math.floor(
      (timeDifference /
        (milliSecondsInASecond * minutesInAnHour * secondsInAMinute)) %
      hoursInADay
    );

    const minutesToDday = Math.floor(
      (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
    );

    const secondsToDday =
      Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

    return { secondsToDday, minutesToDday, hoursToDday, daysToDday };
  }
}