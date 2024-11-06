import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemCardComponent } from '../../shared/item-card/item-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, ItemCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  items = [1,2,3,4,5,6,7,8];
}
