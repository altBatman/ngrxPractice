import { createAction, props } from '@ngrx/store';
import { User } from './auth.state';

export const loginStart = createAction('[auth] loginStart');

export const loginSuccess = createAction(
  '[auth] loginSuccess',
  props<{ user: User }>()
);
