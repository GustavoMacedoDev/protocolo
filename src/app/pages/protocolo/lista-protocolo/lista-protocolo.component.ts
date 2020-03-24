import { Component, OnInit } from '@angular/core';
import { Protocolo } from 'src/app/models/protocolo';
import { ProtocoloService } from 'src/app/services/protocolo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-protocolo',
  templateUrl: './lista-protocolo.component.html',
  styleUrls: ['./lista-protocolo.component.css']
})
export class ListaProtocoloComponent implements OnInit {
  
  public titulo: string;
  public protocolos: Protocolo[] = new Array();

  constructor(private protocoloService: ProtocoloService,
     private router: Router) { }

  ngOnInit(): void {
    this.titulo = "Protocolos";

    this.protocoloService.getProtocolos().subscribe(res => this.protocolos = res);
  }


}
