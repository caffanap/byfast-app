import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { PaketSayaComponent } from './paket-saya.component';



@NgModule({
  declarations: [
    PaketSayaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule,
    FormsModule,
  ]
})
export class PaketSayaModule { }
