import {
  increment,
  decrement,
  reset,
  addValue,
  changeAuthor,
} from './counter.actions';
import { createReducer, on } from '@ngrx/store';
import { counterState, CounterState } from './counter.state';

const _counterReducer = createReducer(
  counterState,
  on(increment, (state: CounterState) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: CounterState) => {
    let counter;
    if (state.counter > 0) {
      counter = state.counter - 1;
    } else {
      counter = 0;
    }
    return {
      ...state,
      counter: counter,
    };
  }),
  on(reset, (state: CounterState) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addValue, (state: CounterState, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeAuthor, (state) => {
    return {
      ...state,
      author: state.author === 'Mangena' ? 'Rajesh' : 'Mangena',
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
