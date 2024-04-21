import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterLink
  ]
})
export class MenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
