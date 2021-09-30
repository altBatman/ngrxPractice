import { increment, decrement, reset, addValue } from './counter.actions';
import { createReducer, on } from '@ngrx/store';
import { initialState, InitialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state: InitialState) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state: InitialState) => {
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
  on(reset, (state: InitialState) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addValue, (state: InitialState, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
