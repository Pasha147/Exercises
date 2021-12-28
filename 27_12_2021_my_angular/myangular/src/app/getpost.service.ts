import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {

  constructor() { }

  getStr():string{
    return 'aaasss' 
  }

  getStrO():Observable<string>{
    const strOb=of ('dddd')
    return strOb
  }
}
