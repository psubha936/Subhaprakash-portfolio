import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Subhaprakash Nayak'],
    ['DOB', '03/05/1997'],
    ['Work Exp', '25 Years'],
    ['Education', 'MCA (2022)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi there! My name is Subhaprakash Nayak, and I am a skilled and motivated software engineer based in Bangalore, Karnataka. I have experience analyzing software requirements, fixing bugs, and creating website layouts using a range of tools including HTML, CSS, Bootstrap, JavaScript, TypeScript, Angular, SQL, and GIT.',
    `I have a Master's Degree in Computer Application and a Bachelor's Degree in Computer Application, and am currently working as a Software Engineer at Pratian Technology in Bangalore. My current role involves analyzing software requirements, fixing bugs, and creating design layouts for websites using HTML, CSS, Bootstrap, JavaScript, TypeScript, and Angular.`,
    'Outside of work, I enjoy staying active and healthy through sports and physical activities, as well as traveling and exploring new places. I am also an avid reader and enjoy learning about new technologies and programming languages in my free time.',
    'Thanks for stopping by my page, and feel free to reach out if you have any questions or would like to connect!',
  ];

  constructor() {}

  ngOnInit(): void {}
}
