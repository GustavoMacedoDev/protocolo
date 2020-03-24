import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ListaProtocoloComponent } from './pages/protocolo/lista-protocolo/lista-protocolo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListaUsuarioComponent } from './pages/usuario/lista-usuario/lista-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DashboardComponent } from './pages/restrito/dashboard/dashboard.component';
import { TokenApiService } from './interceptadores/token-api.service';
import { InvalidTokenApiService } from './interceptadores/invalid-token-api.service';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { CabecalhoComponent } from './barra-navegacao/cabecalho/cabecalho.component';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarraNavegacaoComponent,
    ListaProtocoloComponent,
    ListaUsuarioComponent,
    LoginComponent,
    BemVindoComponent,
    CadastroComponent,
    DashboardComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(environment.toastConfig)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenApiService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InvalidTokenApiService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
