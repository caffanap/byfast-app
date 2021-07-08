import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-screen',
  templateUrl: './success-screen.component.html',
  styleUrls: ['./success-screen.component.scss'],
})
export class SuccessScreenComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {}

  back() {
    this.location.back()
  }

  gotopaket() {
    this.router.navigate(['/paket-saya'], { replaceUrl: true })
  }
}
