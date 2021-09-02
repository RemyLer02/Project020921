import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss']
})
export class MyButtonComponent implements OnInit {
message: string = 'Hello World'
  constructor() { }

  ngOnInit(): void {
  }


  displayMessage(): void {
alert('TEST COMPONENT')  }
}
