import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? '1';
    })
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string) {
    const result = dataFake.filter((item:any) => item.id.toString() === id)[0];
    console.log(result)
    this.photo = result.photo;
    this.title = result.title;
    this.description = result.description;
    this.url = result.url;
    this.type = result.type;
  }
}
