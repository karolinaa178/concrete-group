import { Component, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  ColorTypeEnum = ColorTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
