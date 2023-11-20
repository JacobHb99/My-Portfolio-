import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  projects: any[] = [
    {
      project: "Red Hat Run",
      path: '../../assets/images/projects/el_pollo.png',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis error id nihil.',
      skills: "Javascript | HTML | CSS"
      },
    {
      project: "Join", 
      path: '../../assets/images/projects/join.png',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis error id nihil.',
      skills: "Javascript | HTML | CSS"
    },
    {
      project: "Portfolio", 
      path: '../../assets/images/projects/pokedex.png',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis error id nihil.',
      skills: "Angular | Typescript | HTML | CSS"
    },
  ];

  constructor(public home: HomeComponent) {
    
  }
}
