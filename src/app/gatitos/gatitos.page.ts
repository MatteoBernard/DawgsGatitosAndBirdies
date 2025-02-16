import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {MenuComponent} from "../menu/menu.component";
import {ContainerComponent} from "../container/container.component";

@Component({
  selector: 'app-gatitos',
  templateUrl: './gatitos.page.html',
  styleUrls: ['./gatitos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, ContainerComponent]
})
export class GatitosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
