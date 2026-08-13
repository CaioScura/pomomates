import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { chatboxOutline, playCircle, playOutline, statsChartOutline, search, menuOutline, notificationsOutline } from 'ionicons/icons';

import { StudyCardComponent } from '../components/study-card/study-card.component';
import { PomomateItemComponent } from '../components/pomomate-item/pomomate-item.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonButton,
    IonButtons,
    IonHeader, IonIcon, IonTab, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar,
    StudyCardComponent,PomomateItemComponent,
  ],
})

export class HomeComponent {


  constructor(private router: Router) {
    addIcons({ chatboxOutline, playCircle, playOutline, statsChartOutline, search, menuOutline, notificationsOutline });
  }

  goToNotification() {
      this.router.navigate(['/notification']);
    }


}
