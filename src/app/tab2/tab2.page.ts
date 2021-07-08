import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }

  public Paket = [
    {
      nama_kategori: "Terpopuler",
      item_paket: [
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
    },
    {
      nama_kategori: "Cocok Buat Kamu",
      item_paket: [
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
        {
          id: 1,
          title: "Paket internet lokal Extra",
          subtitle: "20 GB / 30 Hari + 2 GB Tiktok",
          price: "Rp 50.000"
        },

      ]
    }
  ]

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }


}
