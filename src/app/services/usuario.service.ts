import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrlService:string = '';
  private headers: HttpHeaders;

    constructor(private httpClient: HttpClient,
                private configService: ConfigService) { 
        
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/usuario/';

        this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });

    }

    getProtocolos() : Observable<Usuario[]>{        
      return this.httpClient.get<Usuario[]>(this.baseUrlService);
    } 
}
