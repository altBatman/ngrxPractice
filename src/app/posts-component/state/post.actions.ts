import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const addPost = createAction('addNewPost', props<{ post: Post }>());
export const editPost = createAction('editPost', props<{ post: Post }>());
export const deletePost = createAction('deletePost', props<{ id: number }>());
