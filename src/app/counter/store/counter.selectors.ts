import { CounterState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounterSelector = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getAuthorSelector = createSelector(getCounterState, (state) => {
  return state.author;
});
