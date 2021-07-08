import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-paket',
  templateUrl: './detail-paket.component.html',
  styleUrls: ['./detail-paket.component.scss'],
})
export class DetailPaketComponent implements OnInit {

  complete: boolean = true

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {}

  back() {
    this.location.back()
  }

  beli() {
    if (this.complete) {
      this.router.navigate(['/success-page'], { skipLocationChange: true })
    }else{
      this.router.navigate(['/error-page'], { skipLocationChange: true })
    }
  }
}
