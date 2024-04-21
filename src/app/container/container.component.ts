import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
  ]
})
export class ContainerComponent  implements OnInit {
  @Input() title: string = 'title';
  imageUrl: string = 'imageUrl';
  @Input() parentView: string = 'parentView';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.reloadImage();
  }

  reloadImage() {
    switch (this.parentView) {
      case 'dawgs':
        this.apiService.getRandomDawg().subscribe((imageUrl) => {
          this.imageUrl = imageUrl;
        });
        break;
      case 'gatitos':
        this.apiService.getRandomGatito().subscribe((imageUrl) => {
          this.imageUrl = imageUrl;
        });
        break;
      case 'birdies':
        this.apiService.getRandomBirdie().subscribe((imageUrl) => {
          this.imageUrl = imageUrl;
        });
        break;
    }
  }

}
