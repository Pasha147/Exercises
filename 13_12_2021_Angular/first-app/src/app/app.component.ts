import { Component } from '@angular/core';

export interface Card{
  title?: string
  text?: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-app';
  toggle=true

  cards: Card [] =[
    {title: 'Card 1', text: 'this is card number 1'},
    {title: 'Card 222', text: 'this is card number 2'},
    {title: 'Card 344333', text: 'this is card number 3'},
  ]

  toggleCards(){
    this.toggle=!this.toggle
  }
}
