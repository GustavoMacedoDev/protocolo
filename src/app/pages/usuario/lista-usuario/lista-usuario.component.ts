import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  public titulo: string;
  public usuarios: Usuario[] = new Array();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.titulo = "Usuario Cadastrados";

    //this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);

  }

}
