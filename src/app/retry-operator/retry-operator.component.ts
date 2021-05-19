import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.scss']
})
export class RetryOperatorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(){
    this.http.get('https://httpbin.org/get').subscribe(console.log);
  }

}
