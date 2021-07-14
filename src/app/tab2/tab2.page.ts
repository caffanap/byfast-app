import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PaketService } from '../services/paket.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router, private alertController: AlertController, private paketService: PaketService) { }

  public paket = []

  ionViewDidEnter() {
    this.paketService.paket().subscribe((val) => {
      this.paket = val
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
    this.paketService.paket().subscribe((val) => {
      this.paket = val
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

  goToDetailPage(id) {
    this.router.navigate(['detail-paket'], { state: {id: id} })
  }


}
