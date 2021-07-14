import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PaketService } from 'src/app/services/paket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail-paket',
  templateUrl: './detail-paket.component.html',
  styleUrls: ['./detail-paket.component.scss'],
})
export class DetailPaketComponent implements OnInit {

  complete: boolean = true

  id: string
  paket = {}
  topping = []

  extraTopping = false

  title: string

  pulsa = 0
  point: number = 0

  total: number = 0

  pointer_topping = 0
  current_minus = 0

  loading = false

  constructor(private userService: UserService, private alertController: AlertController, private paketService: PaketService, private location: Location, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state.id) {
      this.id = this.router.getCurrentNavigation().extras.state.id
    } else {
      this.router.navigate(['/tabs/tab2'])
    }
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getMe()
    this.getDetail()
    this.getTopping()
    this.getMyBalance()
  }

  getMe() {
    this.userService.me().subscribe((val) => {
      this.userService.setId(val.id)
      this.paketService.setId(val.id)
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan!',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  setPointer(id) {
    if (this.pointer_topping != 0) {
      this.pointer_topping = 0
    } else {
      this.pointer_topping = id
    }
    this.updateTotal()
  }

  back() {
    this.location.back()
  }

  updateTotal() {
    console.log(this.extraTopping);

    if (this.pointer_topping) {
      this.current_minus = parseInt(this.topping[(this.pointer_topping - 1)].price)
      this.total = this.total + parseInt(this.topping[(this.pointer_topping - 1)].price)
    } else {
      this.total = this.total - this.current_minus
    }
  }

  toppingChange() {
    if (this.extraTopping) {
      this.total = this.total - this.point
    } else {
      this.total = +this.total + +this.point
    }
  }

  getDetail() {
    this.paketService.detailPaket(this.id).subscribe((val) => {
      this.paket = val
      this.total = parseInt(val.price)
      this.title = val.name
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  getMyBalance() {
    this.userService.pulsa().subscribe((val) => {
      this.pulsa = val.balance
      this.point = val.point
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  getTopping() {
    this.paketService.topping().subscribe((val) => {
      console.log(val);

      this.topping = val
    }, async err => {
      const alert = await this.alertController.create({
        header: 'Terjadi Kesalahan',
        message: err.error.message,
        buttons: ['OK']
      });
      return alert.present();
    })
  }

  async beli() {
    this.loading = true
    let data = {
      packet_id: this.id,
      topping_id: this.pointer_topping ? this.topping[(this.pointer_topping - 1)].id : null,
      point: this.extraTopping
    }
    this.paketService.transaksi(data).subscribe((val) => {
      this.loading = false
      this.router.navigate(['/success-page'], { skipLocationChange: true, state: { title: this.title } })
    }, async err => {
      this.loading = false
      this.router.navigate(['/error-page'], { skipLocationChange: true, state: { title: this.title } })
    })
  }
}
