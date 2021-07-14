import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PaketService } from 'src/app/services/paket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-paket-saya',
  templateUrl: './paket-saya.component.html',
  styleUrls: ['./paket-saya.component.scss'],
})

export class PaketSayaComponent implements OnInit {

  constructor(private userService: UserService, private alertController: AlertController, private location: Location, private paketService: PaketService) { }

  paket: {}
  topping: []

  ngOnInit() {}

  ionViewDidEnter() {
    this.getMe()
  }

  getMe() {
    this.userService.me().subscribe((val) => {
      this.userService.setId(val.id)
      this.paketService.setId(val.id)
      this.getMyPaket()
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  async openModal(id, type) {
    const alert = await this.alertController.create({
      header: 'Hapus Paket',
      message: 'Apakah anda yakin ingin meghapus paket?',
      buttons: [{
        text: 'IYA',
        handler: () => {
          this.paketService.deletePaket(id, type).subscribe(async (val) => {
            this.getMyPaket()
            const alert = await this.alertController.create({
              header: 'Berhasil!',
              message: val.message,
              buttons: ['OK']
            });
            return alert.present();
          }, async err => {
            const alert = await this.alertController.create({
              header: 'Terjadi Kesalahan!',
              message: err.error.message,
              buttons: ['OK']
            });
            return alert.present();
          })         
        }
      },
      {
        text: 'TIDAK',
      }
    ]
    });
    return alert.present();
  }

  getMyPaket() {
    this.paketService.myPaket().subscribe((val) => {
      console.log(val);
      
      this.paket = val.packet
      this.topping = val.toppings
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  back() {
    this.location.back()
  }

}
