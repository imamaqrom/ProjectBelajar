import { Component, OnInit } from '@angular/core';
import { Customers } from '../customers.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
customer$: Customers [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	return this.dataService.getCustomer()
  	.subscribe(data => this.customer$ = data)
  }
}