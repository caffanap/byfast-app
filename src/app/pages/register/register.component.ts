import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private alertController: AlertController) { }

  nama: string
  no_telpon: string
  email: string
  password: string
  verif_password: string

  loading: boolean = false


  ngOnInit() { }

  async register() {
    
    if (!this.nama || !this.password || !this.no_telpon || !this.email || !this.verif_password) {
      const alert = await this.alertController.create({
        header: 'Gagal Register!',
        message: 'Isi semua form',
        buttons: ['OK']
      });
      return alert.present();
    }

    this.loading = true

    const data = {
      name: this.nama,
      email: this.email,
      password: this.password,
      phone_number: this.no_telpon
    }

    this.userService.register(data).subscribe(async (val) => {
      this.loading = false
      localStorage.setItem('SessionUser', val.token)
      return this.router.navigateByUrl('/')

    }, async err => {
      this.loading = false
      const alert = await this.alertController.create({
        header: 'Gagal Register!',
        message: err.error.error,
        buttons: ['OK']
      });

      await alert.present();
    })


  }

  gotologin() {
    this.router.navigateByUrl("/login")
  }
}
