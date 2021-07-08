import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { AuthGuardServiceService } from './services/auth-guard-service.service';

@NgModule({
  declarations: [AppComponent, HeaderPageComponent],
  entryComponents: [HeaderPageComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuardServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
