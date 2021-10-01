import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post.model';

export const addPost = createAction('addNewPost', props<{ post: Post }>());
