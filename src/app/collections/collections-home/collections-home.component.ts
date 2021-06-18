import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Ralph', age: 27, job: 'Developer'},
    { name: 'Vence', age: 26, job: 'Doctor' },
    { name: 'Jainess', age: 25, job: 'Doctor'},
    { name: 'Reylan', age: 56, job: 'Businessman' },
    {name: 'Vilma', age: 56, job: 'Businesswoman'}
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
