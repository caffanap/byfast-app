import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private toast: ToastController) { }
  no_telepon: string
  password: string

  ngOnInit() {}

  gotoregister() {
    this.router.navigateByUrl("register")
  } 

  login() {
    let data = {
      no_telepon : this.no_telepon,
      password : this.password
    }

    console.log(data);
    if (data.no_telepon == '123' && data.password == '123') {
      
      localStorage.setItem("SessionUser", "000")
      this.router.navigate([''], { replaceUrl: true })
    }else{
      
      this.toast.create({
        message: "No Hp atau Password Anda Salah!",
        duration: 2000
      })
      console.log("tst");
    }
  }
}
