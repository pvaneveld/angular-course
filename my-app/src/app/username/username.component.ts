import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName: String = ''
  color: String[] = [
    'red',
    'green',
    'blue',
    'orange',
    'pink',
    'brown',
    'purple'
  ]
  buttonColor: String = this.color[0];

  fontSizeBig: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setButtonColor() {
    const length = this.color.length - 1;
    const random = Math.random() * length;
    const index = Math.round(random);
    this.buttonColor = this.color[index];
  }

}
