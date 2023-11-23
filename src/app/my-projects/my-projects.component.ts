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
      path: '../../assets/images/projects/redHatRun.png',
      info: 'A simple jump and run game based on object-oriented programming. Help Rudy find his way home.',
      skills: "Javascript | HTML | CSS",
      gitPath: '',
      liveTestPath: 'https://jacob-hengsbach.developerakademie.net/redHatRun/index.html',
      },
    {
      project: "Join", 
      path: '../../assets/images/projects/join.png',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis error id nihil.',
      skills: "Javascript | HTML | CSS",
      gitPath: '',
      liveTestPath: '',
    },
    {
      project: "Portfolio", 
      path: '../../assets/images/projects/portfolio.png',
      info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum officiis error id nihil.',
      skills: "Angular | Typescript | HTML | CSS",
      gitPath: '',
      liveTestPath: '',
    },
  ];

  constructor(public home: HomeComponent) {
    
  }
}
