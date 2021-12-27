import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myangular';
  str:string=""
  num:number=0
  clickBtn():void{
    this.num++
    this.str=`clickBtn ${this.num}`
    
  }
  
}
