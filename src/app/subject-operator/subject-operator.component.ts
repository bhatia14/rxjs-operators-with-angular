import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../services/design-utility.service';

@Component({
  selector: 'app-subject-operator',
  templateUrl: './subject-operator.component.html',
  styleUrls: ['./subject-operator.component.scss']
})
export class SubjectOperatorComponent implements OnInit {

  exclusive: boolean = false;
  username: string;

  constructor(private _designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this._designUtility.exclusive.subscribe(res => {
      this.exclusive = res;
    });

    this._designUtility.username.subscribe(res =>{
      this.username = res;
    });
  }

}
