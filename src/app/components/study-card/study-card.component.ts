import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

import { 
  ellipsisHorizontal, 
  shareSocialOutline,
  exitOutline } from 'ionicons/icons';

import { 
  IonCard, 
  IonButton, 
  IonIcon,
  IonPopover,
  IonContent,
  IonList,
  IonItem,
  IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-study-card',
  standalone: true,
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.scss'],
  imports: [
    IonCard,
    IonButton,
    IonIcon,
    IonPopover,
    IonContent,
    IonList,
    IonItem,
    IonLabel
  ]
})

export class StudyCardComponent {

  dropdownAberto = false;
  eventoDropdown: Event | undefined;

  constructor() {
    addIcons({ 
      ellipsisHorizontal,
      shareSocialOutline,
      exitOutline
     });
  }

  abrirDropdown(event: Event) {
    this.eventoDropdown = event;
    this.dropdownAberto = true;
  }

  compartilharGrupo() {
    console.log('Compartilhar grupo');

    this.dropdownAberto = false;
  }

  sairDoGrupo() {
    console.log('Sair do grupo');

    this.dropdownAberto = false;
  }
}