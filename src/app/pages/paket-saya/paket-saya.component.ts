import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paket-saya',
  templateUrl: './paket-saya.component.html',
  styleUrls: ['./paket-saya.component.scss'],
})

export class PaketSayaComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {}

  back() {
    this.location.back()
  }

}
