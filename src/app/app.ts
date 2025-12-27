import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { ImagePosition, ImageWithText, ImageWithTextData } from "./components/image-with-text/image-with-text";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ImageWithText],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

  protected readonly imageWithTextData1: ImageWithTextData = {
    imagePosition: ImagePosition.LEFT,
    image: {
      src: '/assets/images/rainer.jpg',
      alt: 'Test',
      style: 'max-height: 600px',
    },
    text: 'Ich lade euch herzlich ein, mit mir <span>60 Jahre Leben</span> zu feiern - mit Menschen, die mich begleitet, geprägt und bereichert haben.',
  };
}
