import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HomeService } from '../services/home.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  rekomendasiPaket = []

  profile = []

  pulsa = {}
  
  banner = {}

  total_kuota = {}

  constructor(private homeService: HomeService, private alertController: AlertController, private router: Router, private userService: UserService) {}

  ionViewDidEnter() {
    this.getMe()
    this.getRekomendasiPaket()
    this.getBanner()
  }

  getMe() {
    this.userService.me().subscribe((val) => {
      this.userService.setId(val.id)
      this.profile = val
      this.getPulsa()
      this.totalKuotaSaya()
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  totalKuotaSaya() {
    this.userService.totalKuota().subscribe((val) => {
      this.total_kuota = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }
 
  getPulsa() {
    this.userService.pulsa().subscribe((val) => {
      this.pulsa = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  doRefresh(event) {
    this.userService.me().subscribe((val) => {
      this.profile = val
      this.getPulsa()
      this.totalKuotaSaya()
      event.target.complete();
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  getRekomendasiPaket() {
    this.homeService.rekomendasi().subscribe((val) => {
      this.rekomendasiPaket = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  getBanner() {
    this.homeService.banner().subscribe((val) => {
      this.banner = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  gotopaket() {
    this.router.navigate(['tabs/tab2'])
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
