import { PostState } from './post.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const postState = createFeatureSelector<PostState>('posts');

export const getPost = createSelector(postState, (state) => {
  return state.posts;
});
