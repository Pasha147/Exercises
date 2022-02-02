import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Item } from './interfaces';

// interface Item {
//   ProductId: number;
//   ColorIdx: number;
//   ProductCode: string;
//   ProductDescription: string;
//   Price: number;
//   VoDatum: number | string;
//   IsHeavy: any;
//   RestrictedLands: any;
//   IsFsk: boolean;
//   IsOrdergruppeC: boolean;
// }

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Item[]> {
    const url = '/assets/DATA.json';
    return this.http.get<Item[]>(url);
  }
}
