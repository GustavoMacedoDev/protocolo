import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { NotAuthGuard } from './guards/not-auth.guard';
import { DashboardComponent } from './pages/restrito/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BemVindoComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate: [NotAuthGuard]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
