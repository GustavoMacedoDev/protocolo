import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private authService: AuthService) { }
  canActivate(): Observable<boolean> {
    return this.authService.autenticado$.pipe(
      map(autenticado => {
        return !autenticado;
      })
    );
  }
}
