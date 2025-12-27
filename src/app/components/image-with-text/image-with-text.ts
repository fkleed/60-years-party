import { Component, input, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { required } from '@angular/forms/signals';

export enum ImagePosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export type Image = {
  src: string;
  alt: string;
  style?: string;
};

export type ImageWithTextData = {
  imagePosition: ImagePosition;
  image: Image;
  heading?: string;
  text: string;
};

@Component({
  selector: 'app-image-with-text',
  imports: [NgClass],
  templateUrl: './image-with-text.html',
  styleUrl: './image-with-text.css',
})
export class ImageWithText {

  imageWithTextData = input.required<ImageWithTextData>();
}
