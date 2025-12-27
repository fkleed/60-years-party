import { Component, input, Input } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';

export enum ImagePosition {
  LEFT = 'left',
  RIGHT = 'right',
}

export type Image = {
  src: string;
  alt: string;
  style?: string;
};

export type ImageWithContentData = {
  imagePosition: ImagePosition;
  image: Image;
};

@Component({
  selector: 'app-image-with-content',
  imports: [NgClass],
  templateUrl: './image-with-content.html',
  styleUrl: './image-with-content.css',
})
export class ImageWithContent {

  imageWithContentData = input.required<ImageWithContentData>();
}
