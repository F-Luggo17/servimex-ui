import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { ServicesInfoComponent } from './services-info/services-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CompanyInfoComponent, ServicesInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
