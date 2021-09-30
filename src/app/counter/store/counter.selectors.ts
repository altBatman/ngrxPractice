import { InitialState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCounterState = createFeatureSelector<InitialState>('counter');

export const getCounterSelector = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const authorSelector = createSelector(getCounterState, (state) => {
  return state.author;
});
