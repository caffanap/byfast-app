import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from './services/user.service';
import { HomeService } from './services/home.service';
import { PaketService } from './services/paket.service';

@NgModule({
  declarations: [AppComponent, HeaderPageComponent],
  entryComponents: [HeaderPageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuardServiceService, UserService, HomeService, PaketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
