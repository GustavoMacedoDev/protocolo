import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProtocoloComponent } from './protocolo/lista-protocolo/lista-protocolo.component';


let routes: Routes = [
  { path : 'lista-protocolo', component: ListaProtocoloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
