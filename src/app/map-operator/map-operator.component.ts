import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.scss']
})
export class MapOperatorComponent implements OnInit, OnDestroy {

 //map subs
 mapSubscription1$: Subscription;
 exmple1: number;
 mapSubscription2$: Subscription;
 names: string[];

 constructor() { }

 ngOnInit(): void {

   //Map Example 1
   const exampleObs1 = interval(1000);

   this.mapSubscription2$ = exampleObs1.pipe(
     map(data => data + 1)
   ).subscribe(res => this.exmple1 = res);

   //Map example 2
   const mapTestArray = [{ id: 1, name: 'abc1' },
                         { id: 2, name: 'abc2' },
                         { id: 3, name: 'abc3' },
                         { id: 4, name: 'abc4' },
                         { id: 5, name: 'abc5' },
                         { id: 6, name: 'abc6' },
                         { id: 7, name: 'abc7' },
                         { id: 8, name: 'abc8' },
                         { id: 9, name: 'abc9' },
                         { id: 10, name: 'abc10' }];
   const exampleObs2 = from(mapTestArray);

   this.mapSubscription2$ = exampleObs2.pipe(
     map(data => data.name),
     toArray()
   ).subscribe(res => this.names = res);
 
 }

 ngOnDestroy(): void {
   this.mapSubscription1$.unsubscribe();
   this.mapSubscription2$.unsubscribe();
 }


}
