import { Component } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ImagePosition, ImageWithContent, ImageWithContentData } from './components/image-with-content/image-with-content';
import { Confetti } from "./components/confetti/confetti";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, ImageWithContent, Confetti],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  protected readonly imageWithContentDataGreeting: ImageWithContentData = {
    imagePosition: ImagePosition.LEFT,
    image: {
      src: '/assets/images/rainer.jpg',
      alt: 'Rainer and Alois',
      style: 'max-height: 600px',
    },
  };

  protected readonly imageWithContentDataLocation: ImageWithContentData = {
    imagePosition: ImagePosition.RIGHT,
    image: {
      src: '/assets/images/stollburg.jpg',
      alt: 'Stollburg',
      style: 'max-height: 400px'
    }
  }
}
