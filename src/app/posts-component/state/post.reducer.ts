import { addPost, deletePost, savePost } from './post.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState } from './post.state';

const _postreducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
    };
  }),

  /**
   * TODO: Have to save/edit the post
   * * Remember the state should be immutable
   */
  on(savePost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts],
    };
  }),

  /**
   * TODO: Have to find and delete the post by action.id
   * * Remember the state should be immutable
   */
  on(deletePost, (state, action) => {
    return {
      ...state,
      posts: [...state.posts],
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postreducer(state, action);
}
