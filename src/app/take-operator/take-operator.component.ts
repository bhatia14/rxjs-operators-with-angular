import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Subject } from 'rxjs';
import { take, takeLast, takeUntil, tap, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss']
})
export class TakeOperatorComponent implements OnInit, OnDestroy {

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
  dataValues: any;
  dataValues2: any;
  dataValues3: any;

  destroy$ : Subject<boolean>  = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
    const obs = from(this.dataArr);

    // Example 1 take
    obs.pipe(
      take(5),
      toArray()
    ).subscribe(res => this.dataValues = res);

    // Example 2 takeLast
    obs.pipe(
      takeLast(5),
      toArray()
    ).subscribe(res => this.dataValues2 = res);

     // Example 3 takeUntil
     obs.pipe(
      takeUntil(this.destroy$),
      toArray()
    ).subscribe(res => this.dataValues3 = res);

  }

  ngOnDestroy(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
