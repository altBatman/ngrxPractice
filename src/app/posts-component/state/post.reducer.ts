import { addPost } from './post.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';

const _postreducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postreducer(state, action);
}
