import { Component, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ColorTypeEnum = ColorTypeEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
