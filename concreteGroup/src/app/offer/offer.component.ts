import { Component, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  ColorTypeEnum = ColorTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
