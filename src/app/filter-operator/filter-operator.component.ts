import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.scss']
})
export class FilterOperatorComponent implements OnInit {

  dataArr = [
    { id: 0, age: 'abc', job: 'js' },
    { id: 1, age: 'abc', job: 'ts' },
    { id: 2, age: 'abc', job: 'js' },
    { id: 3, age: 'abc', job: 'java' },
    { id: 4, age: 'abc', job: 'js' },
    { id: 5, age: 'abc', job: 'java' },
    { id: 6, age: 'abc', job: 'js' },
    { id: 7, age: 'abc', job: 'ts' },
    { id: 8, age: 'abc', job: 'js' },
    { id: 9, age: 'abc', job: 'ts' }
  ];
  data: any;
  data2: any;

  constructor() { }

  ngOnInit(): void {
    const team = from(this.dataArr);
    
    //Example 1
    team.pipe(
      filter(data => data.job.length > 2),
      toArray()
    )
    .subscribe(res => this.data = res);

     //Example 2
     team.pipe(
      filter(data => data.job === 'js'),
      toArray()
    )
    .subscribe(res => this.data2 = res);

  }

}
