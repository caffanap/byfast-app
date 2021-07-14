import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-screen',
  templateUrl: './error-screen.component.html',
  styleUrls: ['./error-screen.component.scss'],
})
export class ErrorScreenComponent implements OnInit {
  title: string
  constructor(private location: Location, private router: Router) { 
    this.title = this.router.getCurrentNavigation().extras.state.title
  }
  ngOnInit() {}

  back() {
    this.location.back()
  }
}
