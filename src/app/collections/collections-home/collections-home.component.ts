import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink = 'hi  ';
  data = [
    { name: 'James', age: 23, job: 'Designer', employed: true },
    { name: 'Jill', age: 34, job: 'Programmer', employed: false },
    { name: 'Elyse', age: 25, job: 'Programmer', employed: true },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job?' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
