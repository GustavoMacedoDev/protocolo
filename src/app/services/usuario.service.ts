import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _usuario: BehaviorSubject<Usuario>;
  public readonly usuario$: Observable<Usuario>;

  constructor(private http: HttpClient) {
    this._usuario = new BehaviorSubject({} as Usuario);
    this.usuario$ = this._usuario.asObservable();
  }

  setUsuario(usuario: Usuario) {
    this._usuario.next(usuario);
  }

  cadastrar(usuario: Usuario) {
    const url = `${environment.baseApiUrl}/usuario`;
    return this.http.post(url, usuario);
  }
}
