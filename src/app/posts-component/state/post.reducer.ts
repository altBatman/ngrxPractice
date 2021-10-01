import { createReducer } from '@ngrx/store';
import { postState } from './post.state';

const _postreducer = createReducer(postState);

export function postReducer(state: any, action: any) {
  return _postreducer(state, action);
}
