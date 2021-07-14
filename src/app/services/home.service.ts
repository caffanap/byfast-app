import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  public base_url: string = 'https://sangar.xyz/'

  public paketSaya(id) {
    return this.http.get<any>(this.base_url + 'api/paket-saya/' + id)
  }

  public banner() {
    return this.http.get<any>(this.base_url + 'api/banner')
  }

  public rekomendasi() {
    return this.http.get<any>(this.base_url + 'api/rekomendasi-paket')
  }
}
