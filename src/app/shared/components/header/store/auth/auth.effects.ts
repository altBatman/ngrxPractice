import { loginStart, loginSuccess } from './auth.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { exhaustMap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { User } from './auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login().pipe(
          map((data) => {
            let user: User = { ...(<User>data) };
            return loginSuccess({ user });
          })
        );
      })
    );
  });
}
