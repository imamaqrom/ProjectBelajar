import { Component, OnInit } from '@angular/core';
import { Pemain } from '../pemain.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pemain',
  templateUrl: './pemain.component.html',
  styleUrls: ['./pemain.component.css']
})
export class PemainComponent implements OnInit {
  pemain$: Pemain [];

  //inject HttpClient into your component or service.
  constructor (private dataService: DataService) {}
  ngOnInit() {
    return this.dataService.getCustomer()
    .subscribe(data => this.pemain$ = data)
  }
}