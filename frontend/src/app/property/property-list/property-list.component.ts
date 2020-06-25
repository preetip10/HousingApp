import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
    "id": 1,
    "name" : "ABC House",
    "type": "House",
    "price": 12000
    },
    {
      "id": 2,
      "name" : "Birla House",
      "type": "House",
      "price": 18000
    },
    {
      "id": 3,
      "name" : "Koi House",
      "type": "House",
      "price": 19000
    },
    {
      "id": 4,
      "name" : "Prince Apartment",
      "type": "Apartment",
      "price": 10000
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
