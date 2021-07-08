import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ErrorScreenComponent } from './components/error-screen/error-screen.component';
import { SuccessScreenComponent } from './components/success-screen/success-screen.component';
import { DetailPaketComponent } from './pages/detail-paket/detail-paket.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginModule } from './pages/login/login.module';
import { PaketSayaComponent } from './pages/paket-saya/paket-saya.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'paket-saya',
    component: PaketSayaComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'detail-paket',
    component: DetailPaketComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'success-page',
    component: SuccessScreenComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'error-page',
    component: ErrorScreenComponent,
    canActivate: [AuthenticationGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    LoginModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
