import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  firstSkillRow: any[] = [
    {skill: "Angular", path: '../../assets/images/stackIcons/Property 1=Angular.png'},
    {skill: "Api", path: '../../assets/images/stackIcons/Property 1=Api.png'},
    {skill: "CSS", path: '../../assets/images/stackIcons/Property 1=css.png'},
  ];

  secondSkillRow: any[] = [
    {skill: "Git", path: '../../assets/images/stackIcons/Property 1=Git.png'},
    {skill: "HTML", path: '../../assets/images/stackIcons/Property 1=html.png'},
    {skill: "Javascript", path: '../../assets/images/stackIcons/Property 1=JavScript.png'},
    {skill: "Material Design", path: '../../assets/images/stackIcons/Property 1=Test Automation.png'}
  ];

  thirdSkillRow: any[] = [
    {skill: "SCRUM", path: '../../assets/images/stackIcons/Property 1=Scrum.png'},
    {skill: "Firebase", path: '../../assets/images/stackIcons/Property 1=Firebase.png'},
    {skill: "Angular", path: '../../assets/images/stackIcons/Property 1=Wordpress.png'}
  ];

  skills: any[] = [
    {skill: "Angular", path: '../../assets/images/stackIcons/Property 1=Angular.png'},
    {skill: "Api", path: '../../assets/images/stackIcons/Property 1=Api.png'},
    {skill: "CSS", path: '../../assets/images/stackIcons/Property 1=css.png'},
    {skill: "Git", path: '../../assets/images/stackIcons/Property 1=Git.png'},
    {skill: "HTML", path: '../../assets/images/stackIcons/Property 1=html.png'},
    {skill: "Javascript", path: '../../assets/images/stackIcons/Property 1=JavScript.png'},
    {skill: "Material Design", path: '../../assets/images/stackIcons/Property 1=Test Automation.png'},
    {skill: "SCRUM", path: '../../assets/images/stackIcons/Property 1=Scrum.png'},
    {skill: "Firebase", path: '../../assets/images/stackIcons/Property 1=Firebase.png'},
    {skill: "Angular", path: '../../assets/images/stackIcons/Property 1=Wordpress.png'}
  ];


  constructor(public home: HomeComponent) {

  }
}
