import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-operator',
  templateUrl: './debounce-operator.component.html',
  styleUrls: ['./debounce-operator.component.scss']
})
export class DebounceOperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('inputVar') myInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    const searchVal = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(1000)
    )
    searchVal.subscribe(console.log);
  
  }


}
