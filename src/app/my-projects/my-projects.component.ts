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
      gitPath: 'https://github.com/JacobHb99/Red-Hat-Run',
      liveTestPath: 'https://jacob-hengsbach.com/redHatRun/index.html',
      },
    {
      project: "Join", 
      path: '../../assets/images/projects/join.png',
      info: 'Task manager inspired by the Kanban system Create and organize tasks using drag and drop functions and assign users.',
      skills: "Javascript | HTML | CSS",
      gitPath: 'https://github.com/JacobHb99/Join',
      liveTestPath: 'https://jacob-hengsbach.com/join/index.html',
    },
    {
      project: "Portfolio", 
      path: '../../assets/images/projects/portfolio.png',
      info: 'This is my personal Website based on angular. Feel free to check the code on Github.',
      skills: "Angular | Typescript | HTML | CSS",
      gitPath: 'https://github.com/JacobHb99/My-Portfolio-',
    },
  ];

  constructor(public home: HomeComponent) {
    
  }
}
