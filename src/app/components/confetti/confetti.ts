import { Component, inject } from '@angular/core';
import { ConfettiService } from '../../confetti-service';

@Component({
  selector: 'app-confetti',
  imports: [],
  templateUrl: './confetti.html',
  styleUrl: './confetti.css',
})
export class Confetti {

  private confettiService = inject(ConfettiService);

  ngOnInit() {
    this.confettiService.celebrate();
  }
}
