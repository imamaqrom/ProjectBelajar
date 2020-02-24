import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers.model';
import { People } from './people.model';
import { Pemain } from './pemain.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://jsonplaceholder.typicode.com/users';
  apiUrl2 = 'https://jsonplaceholder.typicode.com/posts?userId=1';

	contacts = [
		{id: 1, name: "Bambang", description: "Staff IT", email: "bambang@gmail.com"},
		{id: 2, name: "Yani", description: "Analis", email: "yani12@email.com"},
    {id: 3, name: "Rian", description: "Staff IT", email: "rian.jagur@email.com"},
    {id: 4, name: "Yanto", description: "IT Support", email: "yanto.agoy@email.com"}
	];

  constructor(private _http: HttpClient) { }

  getCustomer() {
    return this._http.get<Customers[]>(this.apiUrl);
  }

  getPemain() {
    return this._http.get<Pemain[]>(this.apiUrl);
  }

  getPeople() {
    return this._http.get<People[]>(this.apiUrl2);
  }

  public getContacts():Array<{id, name, description, email}>{
  	return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
  	this.contacts.push(contact);
  }
}