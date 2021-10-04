import { addPost, deletePost, editPost } from './post.actions';
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

  on(editPost, (state, action) => {
    const index = state.posts.findIndex((post) => {
      return post.id === action.post.id;
    });
    let editedPosts = [...state.posts];
    editedPosts.splice(index, 1, { ...action.post });
    return {
      ...state,
      posts: [...editedPosts],
    };
  }),

  on(deletePost, (state, action) => {
    const filteredPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: [...filteredPosts],
    };
  })
);

export function postReducer(state: any, action: any) {
  return _postreducer(state, action);
}
