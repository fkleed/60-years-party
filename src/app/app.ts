import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ImagePosition, ImageWithContent, ImageWithContentData } from "./components/image-with-text/image-with-content";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ImageWithContent],
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
      style: 'max-height: 400px',
    }
  }
}
