import { Component, Input, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() color: ColorTypeEnum;

  ColorTypeEnum = ColorTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
