import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private alertController: AlertController, private userService: UserService) { }
  no_telepon: string
  password: string

  loading: boolean = false

  ngOnInit() {}

  gotoregister() {
    this.router.navigateByUrl("register")
  } 

  async login() {

    if (!this.no_telepon || !this.password) {
      const alert = await this.alertController.create({
        header: 'Gagal Login!',
        message: 'Isi semua form',
        buttons: ['OK']
      });
      return alert.present();
    }

    if (this.password.length < 8) {
      const alert = await this.alertController.create({
        header: 'Gagal Login!',
        message: 'Password Minimal 8',
        buttons: ['OK']
      });
      return alert.present();
       
    }

    this.loading = true
    let data = {
      phone_number : this.no_telepon,
      password : this.password
    }

    this.userService.login(data).subscribe((val) => {
      this.loading = false
      localStorage.setItem("SessionUser", val.access_token)
      this.router.navigate([''], { replaceUrl: true })
    }, async err => {
      this.loading = false
      const alert = await this.alertController.create({
        header: 'Gagal Login!',
        message: err.error.error,
        buttons: ['OK']
      });
  
      await alert.present();
    })
  }
}
