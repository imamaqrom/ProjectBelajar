import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-karyawan-create',
  templateUrl: './karyawan-create.component.html',
  styleUrls: ['./karyawan-create.component.css']
})
export class KaryawanCreateComponent implements OnInit {

	contact : {id, name, description, email} = {id: null, name: "", description: "", email: ""};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  createContact(){
    console.log(this.contact);
    this.dataService.createContact(this.contact);
    this.contact = {id: null, name: "", description: "", email: ""};

  }
}
