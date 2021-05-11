import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { filter, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.scss']
})
export class TapOperatorComponent implements OnInit, OnDestroy {

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
    skills: 'Angular, Java',
    job: {
      title: 'Java Dev',
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
  dataValues: any;
  subs1: Subscription;
  constructor() { }

  ngOnInit(): void {

    const teamObs = from(this.team);

    //example 1
    this.subs1 = teamObs.pipe(
      //tap is just 
      tap(data => {data.skills === 'JS' ? console.log('tap =>',data) : ''}),
      filter(member => member.job.title === 'Java Dev'),
      toArray()
    ).subscribe(res => this.dataValues = res);
  }

  ngOnDestroy(){
    this.subs1.unsubscribe();
  }

}
