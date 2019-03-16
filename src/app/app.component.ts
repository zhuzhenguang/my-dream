import {Component, OnInit} from '@angular/core';
import 'moment';
import * as moment from 'moment/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  tableData: any[] = [];
  startDate = '';
  endDate = '';
  private originTableData: any[];
  private defaultStartDate = '1111-01-01';
  private defaultEndDate = '9999-01-01';

  constructor() {
    this.onFilter = this.onFilter.bind(this);
  }

  ngOnInit(): void {
    this.tableData = [{
      name: 'Zhenguang Zhu 1',
      date: '2019-03-19',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: 'Zhenguang Zhu 2',
      date: '2019-03-20',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: 'Ming Jiao 3',
      date: '2019-03-21',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: 'Ming Jiao 4',
      date: '2019-03-22',
      address: '上海市普陀区金沙江路 1510 弄',
    }];
    this.originTableData = this.tableData.slice(0);
  }

  onFilter(): void {
    const startDate = this.startDate.trim() || this.defaultStartDate;
    const endDate = this.endDate.trim() || this.defaultEndDate;

    this.tableData = this.originTableData.filter(data => {
      return moment(data.date).isBetween(startDate.trim(), endDate.trim());
    });
  }

  clearStartDate(): void {
    this.startDate = '';
  }

  clearEndDate(): void {
    this.endDate = '';
  }
}
