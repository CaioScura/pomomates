import { Component } from '@angular/core';
import { IonCard, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontal } from 'ionicons/icons';

@Component({
  selector: 'app-study-card',
  standalone: true,
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.scss'],
  imports: [
    IonCard,
    IonButton,
    IonIcon
  ]
})
export class StudyCardComponent {
  constructor() {
    addIcons({ ellipsisHorizontal });
  }
}