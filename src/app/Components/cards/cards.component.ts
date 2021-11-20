import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/Models/image';
import { ImagesService } from 'src/app/Services/images.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards!: Image[];
  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.imagesService
      .getAllImages()
      .subscribe((cards) => (this.cards = cards));
  }
}
