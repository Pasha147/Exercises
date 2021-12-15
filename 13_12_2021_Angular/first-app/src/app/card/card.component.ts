import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  // interpolation:['{{','}}']
})
export class CardComponent implements OnInit {
  title = 'My Card Title';
  text = 'This is my text';
  number = 42;
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
    this.title = 'Has been changed';
  }
  inputHandler(value: any) {
    //   const value=event.target.value
      this.title=value
  }
  chageHandler(){
      console.log(this.title);
      
  }
}
