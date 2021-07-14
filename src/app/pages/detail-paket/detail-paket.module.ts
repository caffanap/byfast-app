import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DetailPaketComponent } from './detail-paket.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DetailPaketComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule,
    FormsModule,
  ]
})
export class DetailPaketModule { }
