import { Component } from '@angular/core';
import { GetpostService } from './getpost.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private getPost: GetpostService){}
  title = 'myangular';
  str:string=""
  num:number=0
  clickBtn():void{
    this.num++
    this.getPost.getStrO().subscribe(a=>this.str=a)
    
  }
  
}
