import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss'],
})
export class SuccessScreenComponent implements OnInit {

  title: string
  constructor(private location: Location, private router: Router) { 
    this.title = this.router.getCurrentNavigation().extras.state.title
  }

  ngOnInit() {}

  back() {
    this.location.back()
  }

  gotopaket() {
    this.router.navigate(['/paket-saya'], { replaceUrl: true })
  }
}
