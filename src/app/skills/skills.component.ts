import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'TypeScript',
      level: 'Expert',
      rating: 95,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'CORE JAVA',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'SQL & MONGODB',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'NodeJs & ExpressJS',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
