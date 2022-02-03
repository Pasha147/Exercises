import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Item } from '../interfaces';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  constructor(private getService: GetDataService) {}

  ngOnInit(): void {
    this.getService.getData().subscribe((data) => {
      this.data = data;
    });
  }

  data: Item[] = [];
  curItem: string[] = [];
  close = false;

  handleClick(curInd: number) {
    this.curItem = [];
    this.close = false;
    // let curInd = this.data.findIndex((i) => ProductId === i.ProductId);
    let curIt: any = {};
    curIt = { ...this.data[curInd] };
    let str: string[] = [];

    for (let key in curIt) {
      if (curIt[key] === null) {
        this.curItem.push(`it's unknown`);
      } else {
        this.curItem.push(`${key}: ${curIt[key]}`);
      }
    }
  }

  closeBtn(): void {
    this.close = true;
  }
}
