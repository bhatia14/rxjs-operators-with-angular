import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.scss']
})
export class PluckOperatorComponent implements OnInit {

  team = [{
    name: 'ABC1',
    skills: 'JS',
    job: {
      title: 'JS Dev',
      salary: 1000
    }
  },
  {
    name: 'ABC2',
    skills: 'TS',
    job: {
      title: 'TS Dev',
      salary: 2000
    }
  },
  {
    name: 'ABC3',
    skills: 'HTML',
    job: {
      title: 'HTML Dev',
      salary: 3000
    }
  },
  {
    name: 'ABC4',
    skills: 'Angular',
    job: {
      title: 'Angular Dev',
      salary: 4000
    }
  },
  {
    name: 'ABC5',
    skills: 'Java',
    job: {
      title: 'Java Dev',
      salary: 5000
    }
  }];
  names: string[];
  titles: string[];

  constructor() { }

  ngOnInit(): void {

    //Example 1
    from(this.team).pipe(
      pluck('name'),
      toArray()
    ).subscribe(res => this.names = res);

    //Example 2
    from(this.team).pipe(
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => this.titles = res);
  }

}
