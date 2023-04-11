import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Engineer',
      company: 'Pratian Technology',
      duration: 'Sep 2022 - Now',
      description: [
        'Analyzed software requirements and fixed bugs.',
        'Created design layouts for websites using HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular13.',
        'Created design layouts for websites using HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular13.',
        'Created design layouts for websites using HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular13.'
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
