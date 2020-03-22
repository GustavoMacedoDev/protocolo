import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuLateralComponent } from './barra-navegacao/menu-lateral/menu-lateral.component';
import { BarraNavegacaoComponent } from './barra-navegacao/barra-navegacao.component';
import { ListaProtocoloComponent } from './protocolo/lista-protocolo/lista-protocolo.component';
import { ProtocoloService } from './services/protocolo.service';
import { ConfigService } from './services/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    BarraNavegacaoComponent,
    ListaProtocoloComponent,
    ListaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService, ProtocoloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
