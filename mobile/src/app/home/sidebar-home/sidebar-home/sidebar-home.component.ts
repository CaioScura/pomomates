import { Component, EventEmitter, Output } from '@angular/core';
import { IonButton, IonIcon, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline, homeOutline, personOutline, settingsOutline, helpCircleOutline, informationCircleOutline, add } from 'ionicons/icons';
import { AvatarComponent } from '../../../components/avatar/avatar.component';

@Component({
  selector: 'app-sidebar-home',
  standalone: true,
  templateUrl: './sidebar-home.component.html',
  styleUrls: ['./sidebar-home.component.scss'],
  imports: [IonButton, IonIcon, IonItem, IonLabel, AvatarComponent]
})
export class SidebarHomeComponent {

  @Output() close = new EventEmitter<void>();

  constructor() {
    addIcons({ closeOutline, homeOutline, personOutline, settingsOutline, helpCircleOutline, informationCircleOutline, add });
  }

  closeSidebar() {
    this.close.emit();
  }

}