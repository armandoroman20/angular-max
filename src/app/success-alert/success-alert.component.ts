import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  // styleUrls: ['./success-alert.component.css']
  styles: [`
     h1 {
  color: blue;
  }
  `]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
