import { Injectable } from '@angular/core';
import { interval, Observable, of, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetpostService {
  constructor(private http: HttpClient) {}

  getS(): Observable<string> {
    const url: string = `https://fpcv.herokuapp.com/api/data/${5}`;
    let message = { name: 'Pasha', text: 'Hello' };
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    let strO = this.http.post<string>(url, message, httpOptions);
  
    return strO;
  }
}
