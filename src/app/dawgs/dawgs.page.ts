import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {MenuComponent} from "../menu/menu.component";
import {ContainerComponent} from "../container/container.component";

@Component({
  selector: 'app-dawgs',
  templateUrl: './dawgs.page.html',
  styleUrls: ['./dawgs.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MenuComponent, ContainerComponent]
})
export class DawgsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
