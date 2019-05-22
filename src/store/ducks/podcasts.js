import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/*
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  loadFailure: null,
});

export const PodcastTypes = Types;
export default Creators;

/*
 * Initial state
 */
export const INITIAL_STATE = Immutable({ data: [] });

/*
 * Reducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
});

/*
  REDUXSAUCE - Cria tudo isso de forma automática
  Types: { 'LOAD_REQUES', LOAD_SUCCESS, LOAD_FAILURE }
  Creators:

  loadRequest: () => ({ type: 'LOAD_REQUEST' }),
  loadSuccess: (data) => ({ type: 'LOAD_SUCCESS', data }),
  loadFailure: () => ({ type: 'LOAD_FAILURE' }),

  Reducer sem reduxsauce
  function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'LOAD_REQUEST':
      return { ...state, loading: true }
    }
  }
 */
