import { Component } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent {
images:any

  constructor(private banner:BannerService){}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.banner.getBanner().subscribe((res:any)=>{
    console.log("banner is called");
    this.images=res
    
  })
}


}
