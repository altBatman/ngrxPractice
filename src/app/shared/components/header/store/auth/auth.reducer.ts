import { loginSuccess } from './auth.actions';
import { createReducer, on } from '@ngrx/store';
import { userState } from './auth.state';

const _userReducer = createReducer(
  userState,
  on(loginSuccess, (state: any, action: any) => {
    return {
      ...state,
      userId: action?.user?.userId,
      id: action?.user?.id,
      completed: action?.user?.completed,
      title: action?.user?.title,
    };
  })
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
