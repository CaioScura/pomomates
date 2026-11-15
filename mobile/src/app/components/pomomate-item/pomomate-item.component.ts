import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pomomate-item',
  templateUrl: './pomomate-item.component.html',
  styleUrls: ['./pomomate-item.component.scss']
})
export class PomomateItemComponent {

  @Input() image = '';

  @Input() message = '';

  @Input() user = '';

  @Input() time = '';

}