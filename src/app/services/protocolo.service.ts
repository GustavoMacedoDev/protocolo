import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { Protocolo } from '../models/protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {
  private baseUrlService:string = '';
  private headers: HttpHeaders;

    constructor(private httpClient: HttpClient,
                private configService: ConfigService) { 
        
        /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
        this.baseUrlService = configService.getUrlService() + '/protocolo/';

        this.headers = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' });

    }

    getProtocolos() : Observable<Protocolo[]>{        
      return this.httpClient.get<Protocolo[]>(this.baseUrlService);
    } 
}
