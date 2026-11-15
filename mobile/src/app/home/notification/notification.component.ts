import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';

import { chevronBack } from 'ionicons/icons';

import { Router } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/angular/standalone';

import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
  ],
})
export class NotificationComponent {
    constructor(private router: Router) {
      addIcons({
      chevronBack
    });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}

