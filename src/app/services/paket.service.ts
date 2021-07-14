import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaketService {

  constructor(private http: HttpClient) { }
  public base_url: string = 'https://sangar.xyz/'

  public id: string

  public paket() {
    let token = localStorage.getItem("SessionUser")
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get<any>(this.base_url + 'api/paket', { headers: header })
  }

  public setId(val) {
    this.id = val
  }

  public detailPaket(id) {
    return this.http.get<any>(this.base_url + 'api/paket/' + id)
  }

  public myPaket() {
    let token = localStorage.getItem("SessionUser")
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.get<any>(this.base_url + 'api/paket-saya/detail/' + this.id, { headers: header })
  }

  public riwayatTransaksi() {
    return this.http.get<any>(this.base_url + 'api/riwayat-pembelian/' + this.id)
  }

  public topping() {
    return this.http.get<any>(this.base_url + 'api/topping')
  }

  public transaksi(raw) {
    return this.http.post<any>(this.base_url + 'api/transaksi-baru/' + this.id, raw)
  }

  public deletePaket(id, type) {
    let token = localStorage.getItem("SessionUser")
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    let data = {
      type: type,
      type_id: id
    }
    return this.http.delete<any>(this.base_url + 'api/paket-saya/nonaktifkan/'+type+'/'+id, { headers: header })
  }

  public simulasi(raw) {
    let token = localStorage.getItem("SessionUser")
    let header = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    })
    return this.http.post<any>(this.base_url + 'api/simulasi/'+this.id, raw, { headers: header })
  }

}
