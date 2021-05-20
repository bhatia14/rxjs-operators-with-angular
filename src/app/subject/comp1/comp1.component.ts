import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  comp1: string;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
  this._designUtility.username.subscribe(res => this.comp1 = res);
  }

  onExclusiveClick(){
    this._designUtility.exclusive.next(true);   
  }
  onClickAction(uname){
    console.log(uname.value);
    
    this._designUtility.username.next(uname.value);
  }

}
