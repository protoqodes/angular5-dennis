import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'homepage-component',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  name: string;
  age: number;
  address: string;
  birth_month: string;
  zip: number;

  constructor() {

  }

  showDetails(input) {
  	console.log(input);
  }

  getMonth(birth_month) {
  	this.birth_month = birth_month;
  	console.log(this.birth_month);
  }

  theZip(zip) {
  	this.zip = zip;
  	console.log(this.zip);
  }
}
