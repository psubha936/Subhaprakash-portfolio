import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'JobCheck:',
      technologies: 'NodeJs, Angular, Angular Material',
      description: [
        `As part of my work at Pratian Technology, I worked on a live project for First Meridian called JobCheck. 
        This comprehensive platform for finding and posting job opportunities required integration with multiple 
        software platforms, including WhatsApp and Twilio. I worked on the integration of these platforms for 
        onboarding purposes, contributing to the success of the project.. `,
      ],
    },
    {
      title: 'HappyTrip',
      technologies: 'HTML, CSS, JS,Bootstrap',
      description: [
        `As part of a team working on the HappyTrip project, I fixed various bugs and added new features to the 
        website. One key addition was an advertisement page that appeared on page reload, as well as a video on 
        one side of the page. I also fixed spelling errors and alignment issues. This project allowed me to gain 
        experience in software development and troubleshooting. 
        `
      ],
    },
    {
      title: 'CMD',
      technologies: 'Angular,Angular PWD , MongoDB, NodeJS',
      description: [
        `I completed a web application called "Connect to my doctor," which features a login and dashboard page 
        with 18 different features. I developed this application using HTML, CSS, Bootstrap, and JavaScript. One 
        notable feature I added was the ability for doctors to show patients how many appointment requests they 
        had received, and to accept or decline these requests. Through this project, I improved my skills in 
        frontend web development and problem-solving. `,
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
