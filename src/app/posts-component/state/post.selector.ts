import { PostState } from './post.state';
import { createFeatureSelector, createSelector, props } from '@ngrx/store';

const postState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(postState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  postState,
  (state: PostState, props: any) => {
    return state.posts.find((post) => post.id === props.id);
  }
);
