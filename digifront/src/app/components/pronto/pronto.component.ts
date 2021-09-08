import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronto',
  templateUrl: './pronto.component.html',
  styleUrls: ['./pronto.component.css']
})
export class ProntoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectWpp(){
    window.open(
      'https://web.whatsapp.com/send?phone=573235004284',
      '_blank' // <- This is what makes it open in a new window.
    );    
  }

  redirectIg(){
    window.open(
      'https://instagram.com/digifotoliced',
      '_blank' // <- This is what makes it open in a new window.
    );    
  }

  redirectMail(){
    window.open(
      'mailto:digifotoliced@gmail.com',
      '_blank' // <- This is what makes it open in a new window.
    );    
  }
}
