import { AuthEffects } from './../shared/components/header/store/auth/auth.effects';
import { PostState } from '../posts-component/state/post.state';
import { CounterState } from '../counter/store/counter.state';
import { counterReducer } from '../counter/store/counter.reducer';
import { postReducer } from '../posts-component/state/post.reducer';
import { userReducer } from '../shared/components/header/store/auth/auth.reducer';
import { User } from '../shared/components/header/store/auth/auth.state';

export interface AppState {
  counter: CounterState;
  postState: PostState;
  userState: User | null;
}

export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
  user: userReducer,
};

export const effects: any[] = [AuthEffects];
