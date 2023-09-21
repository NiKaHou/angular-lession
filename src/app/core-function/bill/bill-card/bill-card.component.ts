import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {
  dataList: string[];
  constructor() {
    this.dataList = [];
   }

  ngOnInit(): void {
    for (let i = 0; i < 15; i++) {
      this.dataList.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!');
    }
  }

}
