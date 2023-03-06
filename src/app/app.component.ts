import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  style='angular';
  technologyStack=[
    {
      name: 'Angular',
      img: '/assets/angular-icon.svg',
      detail: $localize`I've been an Angular developer for about 5 years`
    },
    {
      name: 'Spring',
      img: '/assets/spring-icon.svg',
      detail: ''
    },
    {
      name: 'Postgresql',
      img: '/assets/Postgresql_elephant.svg',
      detail: ''
    },
    {
      name: 'Git',
      img: '/assets/Git_icon.svg',
      detail: ''
    },
    {
      name: 'Ionic',
      img: '/assets/ionic-icon-svgrepo-com.svg',
      detail: ''
    },
    {
      name: 'Java',
      img: '/assets/pngfind.com-mysql-logo-transparent-png-744402.png',
      detail: ''
    },
    {
      name: 'Jira',
      img: '/assets/jira-3.svg',
      detail: ''
    },
    {
      name: 'Bootstrap',
      img: '/assets/Bootstrap_logo.svg',
      detail: ''
    },
    {
      name: 'Node',
      img: '/assets/Node.js_logo.svg',
      detail: ''
    },
    {
      name: 'React',
      img: '/assets/React-icon.svg',
      detail: ''
    },

  ];
  constructor(){

  }

  setStyle(style:string){
    this.style=style;
  }
}
