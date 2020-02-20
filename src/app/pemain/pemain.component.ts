import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pemain',
  templateUrl: './pemain.component.html',
  styleUrls: ['./pemain.component.css']
})
export class PemainComponent {
  title = 'belajar-angular';

  //inject HttpClient into your component or service.
  constructor (private http: HttpClient, private router: Router) {}
  httpdata;
  ngOnInit(): void {this.http.get("http://jsonplaceholder.typicode.com/users").
      subscribe(
         (data) => {this.displaydata(data);}
      )
  	}
  	displaydata(data) {this.httpdata = data;} 
}