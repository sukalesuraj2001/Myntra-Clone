import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
  images: Product[] = []; // Initialize as an empty array

  constructor(private banner: BannerService) {}

  ngOnInit(): void {
    this.banner.getBanner().subscribe((res: Product[]) => {
      console.log("Banner is called");
      this.images = res;
    });
  }
}


