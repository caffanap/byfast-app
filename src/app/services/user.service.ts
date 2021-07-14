import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public base_url: string = 'https://sangar.xyz/'

  public id: string

  public login(raw) {
    return this.http.post<any>(this.base_url + 'api/auth/login', raw)
  }

  public setId(val) {
    this.id = val
  }

  public register(raw) {
    return this.http.post<any>(this.base_url + 'api/auth/register', raw)
  }

  public updateProfile(raw) {
    return this.http.put<any>(this.base_url + 'api/profile/'+this.id, raw)
  }

  public me() {
    let token = localStorage.getItem("SessionUser")
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get<any>(this.base_url + 'api/auth/me', { headers: header })
  }

  public pulsa() {
    return this.http.get<any>(this.base_url + 'api/pulsa/' + this.id)
  }

  public totalKuota() {
    return this.http.get<any>(this.base_url + 'api/paket-saya/ringkasan/' + this.id)
  }
}
