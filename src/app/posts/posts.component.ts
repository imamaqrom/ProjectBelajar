import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  //inject HttpClient into your component or service.
  constructor (private http: HttpClient, private router: Router) {}
  httpdata;
  ngOnInit(): void {this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments").
      subscribe(
         (data) => {this.displaydata(data);}
      )
    }
    displaydata(data) {this.httpdata = data;} 
}
