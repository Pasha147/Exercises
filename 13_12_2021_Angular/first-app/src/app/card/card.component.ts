import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import {Card} from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation:['{{','}}']
})
export class CardComponent implements OnInit {
@Input() card: Card = {}
@Input() index: number=0;

  title = 'My Card Title';
  text = 'This is my text';
  number = 42;
  textColor: string = '';
  cardDate: Date= new Date()

  obj = { name: 'Pasha', age: 43 };

  getInfo() {
    return 'this is my info';
  }

  ngOnInit() {
    setTimeout(() => {
      this.imgUrl = './assets/222.svg';
    }, 1500);
  }
  imgUrl = './assets/123.png';

  changeTitle() {
    this.card.title = 'Has been changed';
  }
  inputHandler(value: any) {
    //   const value=event.target.value
    this.title = value;
  }
  chageHandler() {
    console.log(this.title);
  }
}
