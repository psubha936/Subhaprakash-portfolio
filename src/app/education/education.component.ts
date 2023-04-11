import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Biju Patnaik University of Technology",
      course: 'MCA',
      duration: '2020-2022',
      score: '80%',
    },
    {
      institute: 'Utkal University , Bhubaneswar',
      course: 'BCA',
      duration: '2014-2017',
      score: '70%',
    },
    {
      institute: 'CHSE (Kujanga College Kujang)',
      course: '+2 Science (PCMB)',
      duration: '2012-2014',
      score: '47%',
    },
    {
      institute: 'HSC (Patitapaban High School)',
      course: 'HSC',
      duration: '2002-2012',
      score: '57%',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
