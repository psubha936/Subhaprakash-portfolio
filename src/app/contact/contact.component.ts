import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openGmail() {
    window.open("mailto:psubha936@gmail.com");
  }
  
  openFacebook() {
    window.open("https://www.facebook.com/subhaprakash.nayak");
  }
  
  openInstagram() {
    window.open("https://www.instagram.com/subhaprakash.nayak/");
  }
  

}
