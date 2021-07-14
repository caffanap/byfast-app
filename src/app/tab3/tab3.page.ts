import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PaketService } from '../services/paket.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nama
  public email
  public jenkel
  public ttl
  public dob
  profile = {}

  riwayatList = []

  constructor(private paketService: PaketService, private userService: UserService, private alertController: AlertController, private router: Router) { }

  ionViewDidEnter() {
    this.getMe()
  }

  getMe() {
    this.userService.me().subscribe((val) => {
      this.userService.setId(val.id)
      this.paketService.setId(val.id)
      this.profile = val
      this.nama = val.name
      this.email = val.email
      this.jenkel = val.gender
      this.dob = val.dob
      this.riwayat()

    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  riwayat() {
    this.paketService.riwayatTransaksi().subscribe((val) => {
      this.riwayatList = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  updateProfile() {
    let data = {
      name: this.nama,
      email: this.email,
      gender: this.jenkel,
      dob: this.dob,
    }
    console.log(data);
    
    this.userService.updateProfile(data).subscribe(async (val) => {
      const alert = await this.alertController.create({
        header: 'Berhasil!',
        message: val.message,
        buttons: ['OK']
      });
      alert.present();
      return this.getMe();
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: 'Gagal Update Profile',
        buttons: ['OK']
      });
      return alert.present();
    }) 
  }

  simulasi(type) {
    let data = {
      type: type
    }
    this.paketService.simulasi(data).subscribe(async (val) => {
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

  async logout() {
    const alert = await this.alertController.create({
      header: 'Keluar Akun',
      message: 'Apakah anda yakin ingin keluar?',
      buttons: [{
        text: 'Iya',
        handler: () => {
          localStorage.removeItem('SessionUser')
          this.router.navigateByUrl('/login')
        }
      },
      {
        text: 'Tidak'
      }
      ]
    })
    return alert.present()
  }

}
