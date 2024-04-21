import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {MenuComponent} from "../menu/menu.component";
import {ContainerComponent} from "../container/container.component";

@Component({
  selector: 'app-birdies',
  templateUrl: './birdies.page.html',
  styleUrls: ['./birdies.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, ContainerComponent]
})
export class BirdiesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
