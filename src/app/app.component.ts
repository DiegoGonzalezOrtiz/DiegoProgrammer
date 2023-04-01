import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalExperienceComponent } from './modal-experience/modal-experience.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { ModalSantanderComponent } from './modal-company/modal-company.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  style = 'angular';
  technologyStack = [
    {
      name: 'Angular',
      img: '/assets/angular-icon.svg',
      detail: $localize`Angular is my main development framework, and currently, it's the one I feel most confident with as I have been involved with it since 2017. I started with AngularJS and then learned and worked on projects with Angular 4. Later, I worked on mobile applications using Angular+Ionic. In recent years, I have been working on projects using Angular 11 and 14.`
    },
    {
      name: 'Spring',
      img: '/assets/spring-icon.svg',
      detail: $localize`Spring is this framework to which I have a lot of affection and desire to work with again. My history with it is mainly between 2017 and mid-2019, it was one of the frameworks with which I started in the programming world, making a car insurance sales project, then a hospitality project, and finally a proxy service.`
    },
    {
      name: 'Postgresql',
      img: '/assets/Postgresql_elephant.svg',
      detail: $localize`PostgreSQL was my first database in a job. I have created database models, stored procedures, and queries. I worked with this database for about 2 years between 2017 and 2019.`
    },
    {
      name: 'Git',
      img: '/assets/Git_icon.svg',
      detail: $localize`Git has been a tool I have been using since 2017 and nowadays, I cannot think of creating any project without using it. I have used Git with Bitbucket, Github and Gitlab, created repositories, new branches, followed a gitflow, made pull requests and merge requests, among many other comands that Git offers.`
    },
    {
      name: 'Ionic',
      img: '/assets/ionic-icon-svgrepo-com.svg',
      detail: $localize`My history with Ionic started when I was working at Stefanini. The client I was working for was a company called Cardif, and they gave me the task of creating a proof of concept using Ionic, Firebase, Spring, and MongoDB. I developed a small application to explain to Cardif's management how push notifications work. This experience was one of the reasons why I was hired by Santander and Qintess. While working at Santander, I used this technology for two years until the app was removed from the marketplace.`
    },
    {
      name: 'Java',
      img: '/assets/pngfind.com-mysql-logo-transparent-png-744402.png',
      detail: $localize`I first learned Java in high school, and in university, I gained a deeper understanding of how it works and how to apply it in a professional setting. I learned about proper structure, best practices, design patterns, and database connections. When I worked for NW, I used the Spring framework. Later, at AlmaITS, I worked on a project without any framework, where I designed the database, created the database connection, and developed the microservice. I also worked on the frontend using JSF and Bootstrap. After that, I returned to working with Java and Spring at Stefanini.`
    },
    {
      name: 'Jira',
      img: '/assets/jira-3.svg',
      detail: $localize`I worked with Jira when I was employed at Santander bank, which was a client of Qintess. Qintess provided some coaching to teach us how to use Jira and the Agile methodology, as the bank was transitioning to this new methodology, and our team was a part of this change. As a result, everyone in our team learned how to use Jira effectively.`
    },
    {
      name: 'Bootstrap',
      img: '/assets/Bootstrap_logo.svg',
      detail: $localize`I've been working with Bootstrap since I started working as a developer in NW. There is no company where I haven't used this library, and I have even used it for some tasks during my bachelor's studies. Also, I am using Bootstrap on this website =D`
    },
    {
      name: 'Node',
      img: '/assets/Node.js_logo.svg',
      detail: $localize`I have been honing my skills in Node.js for a considerable amount of time on my own. During my tenure at qintess, I got the chance to work with Node.js in a professional setting for under a year. My experience may be limited, but it has given me enough confidence, as Node.js shares similarities with Java and Angular among other well-known technologies.`
    },
    {
      name: 'React',
      img: '/assets/React-icon.svg',
      detail: $localize`While I don't have any professional experience working with React, I completed a comprehensive course where I gained a solid understanding of the framework. Through this course, I learned about React hooks, printing data, and making requests to APIs. I also had the opportunity to work on several projects that helped me develop my practical skills and put my knowledge into practice. Although I'm still in the process of honing my skills, I'm eager to continue learning and growing as a React developer.`
    },

  ];
  constructor(
    private dialog: MatDialog,
    private clipboard: Clipboard
  ) { }


  setStyle(style: string) {
    this.style = style;
  }
  openModalExperience(experience: any) {
    let config = new MatDialogConfig();
    config.data = experience;
    const dialogRef = this.dialog.open(ModalExperienceComponent, config);
    // You can subscribe to the afterClosed event to get the result of the modal
    dialogRef.afterClosed().subscribe(result => console.log('Modal closed with result:', result));
  }
  openModalCompany(company: string) {
    let config = new MatDialogConfig();
    config.maxHeight = '600px';
    config.data = company;
    const dialogRef = this.dialog.open(ModalSantanderComponent, config);
    dialogRef.afterClosed().subscribe(result => console.log('Modal closed with result:', result));

  }
  goSite(url: string) {
    window.open(url, '_blank');
  }
  copyUrl() {
    this.clipboard.copy(window.location.href);
  }
}
