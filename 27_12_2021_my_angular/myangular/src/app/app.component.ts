import { Component } from '@angular/core';
import { map } from 'rxjs';
import { GetpostService } from './getpost.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private getPost: GetpostService) {}
  title = 'myangular';
  str: string = '';
  num: number = 0;
  clickBtn(): void {
    

    this.getPost.getS().subscribe(a=>{
      this.str+=a

    }
    )

    
      
  }
}
