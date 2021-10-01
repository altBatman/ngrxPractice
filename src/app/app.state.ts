import { PostState } from './posts-component/state/post.state';
import { CounterState } from './counter/store/counter.state';
import { counterReducer } from './counter/store/counter.reducer';
import { postReducer } from './posts-component/state/post.reducer';

export interface AppState {
  counter: CounterState;
  postState: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
};
