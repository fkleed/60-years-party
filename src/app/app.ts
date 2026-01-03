import { Component } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ImagePosition, ImageWithContent, ImageWithContentData } from './components/image-with-content/image-with-content';
import { Confetti } from "./components/confetti/confetti";
import { AcceptanceForm } from "./components/acceptance-form/acceptance-form";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ImageWithContent, Confetti, AcceptanceForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  protected readonly imageWithContentDataGreeting: ImageWithContentData = {
    imagePosition: ImagePosition.LEFT,
    image: {
      src: '/assets/images/rainer.jpg',
      alt: 'Rainer and Alois',
      width: '1198',
      height: '1499',
      priority: true,
      style: 'max-height: 600px; width: auto'
    },
  };

  protected readonly imageWithContentDataLocation: ImageWithContentData = {
    imagePosition: ImagePosition.RIGHT,
    image: {
      src: '/assets/images/stollburg.jpg',
      alt: 'Stollburg',
      width: '1600',
      height: '1200',
      priority: false,
      style: 'max-height: 400px; width: auto'
    }
  }
}
