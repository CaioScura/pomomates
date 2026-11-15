import { Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  imports: [IonIcon]
})
export class AvatarComponent {

  @Input() initials = '';

  @Input() crown = false;

  @Input() pink = false;

  constructor() {
    addIcons({ star });
  }
}
