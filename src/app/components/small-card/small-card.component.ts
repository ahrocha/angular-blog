import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {  @Input()

  @Input()
  id: string = '1';

  @Input()
  photo: string = '';

  @Input()
  title: string = '';

  @Input()
  description: string = "";

  @Input()
  url: string = '';

  @Input()
  type: string = '';
}
