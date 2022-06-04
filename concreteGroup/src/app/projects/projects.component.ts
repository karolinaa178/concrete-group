import { Component, OnInit } from '@angular/core';
import { ColorTypeEnum } from 'src/enums/color-type.enum';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  ColorTypeEnum = ColorTypeEnum;
  imageList = [
    {id: 0, image: '/assets/images/projects/image-0.png', name: 'Posadzki betonowe', description: ''},
    {id: 1, image: '/assets/images/projects/image-1.png', name: 'Posadzki betonowe', description: ''},
    {id: 2, image: '/assets/images/projects/image-2.png', name: 'Posadzki betonowe', description: ''},
    {id: 3, image: '/assets/images/projects/image-3.png', name: 'Posadzki betonowe', description: ''},
    {id: 4, image: '/assets/images/projects/image-4.png', name: 'Posadzki betonowe', description: ''},
    {id: 5, image: '/assets/images/projects/image-5.png', name: 'Posadzki betonowe', description: ''},
    {id: 6, image: '/assets/images/projects/image-6.jpg', name: 'Posadzki betonowe', description: ''},
    {id: 7, image: '/assets/images/projects/image-7.jpg', name: 'Posadzki betonowe', description: ''},
    {id: 8, image: '/assets/images/projects/image-8.jpg', name: 'Posadzki betonowe', description: ''},
    {id: 9, image: '/assets/images/projects/image-9.jpg', name: 'Posadzki betonowe', description: ''},
    {id: 10, image: '/assets/images/projects/image-10.jpg', name: 'Posadzki betonowe', description: ''},
    {id: 11, image: '/assets/images/projects/image-11.jpg', name: 'Posadzki betonowe', description: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
