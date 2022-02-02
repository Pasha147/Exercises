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
  curItem: any = false;

  handleClick(ProductId: number) {
    let curInd = this.data.findIndex((i) => ProductId === i.ProductId);
    this.curItem = this.data[curInd];
  }
}
