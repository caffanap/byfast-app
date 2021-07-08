import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public rekomendasiPaket = [
    {
      id: 1,
      title: "Paket internet lokal Extra",
      subtitle: "20 GB / 30 Hari + 2 GB Tiktok",
      price: "Rp 50.000"
    },
    {
      id: 2,
      title: "Paket hemat Mahasiswa",
      subtitle: "10 GB / 30 Hari",
      price: "Rp 20.000"
    },
    {
      id: 3,
      title: "Paket Sahur Ramadhan",
      subtitle: "20 GB / 30 Hari Jam 1 - 5 pagi",
      price: "Rp 10.000"
    },
    
  ]

  constructor(private router: Router) {}

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  goToDetailPage(id) {
    let params: NavigationExtras = {
      state: {
        id: id
      }
    }
    this.router.navigate(['detail-paket'], params)
  }

  goToPaketSaya() {
    this.router.navigate(['paket-saya'])
  }
}
