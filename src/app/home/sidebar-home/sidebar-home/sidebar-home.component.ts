import { Component, EventEmitter, Output } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, homeOutline, personOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-sidebar-home',
  standalone: true,
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.scss'],
  imports: [IonButton, IonIcon, IonItem, IonLabel]
})
export class SidebarHomeComponent {

  @Output() close = new EventEmitter<void>();

  constructor() {
    addIcons({ closeOutline, homeOutline, personOutline, settingsOutline });
  }

  closeSidebar() {
    this.close.emit();
  }

}