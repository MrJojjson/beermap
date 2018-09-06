import update from 'immutability-helper';
import { findIndex, propEq } from 'ramda';

import {
  FETCH_PENDING,
  FETCH_COMPLETE,
  FETCH_FAILED,
  REMOVE_PENDING,
  REMOVE_COMPLETE,
  REMOVE_FAILED,
} from '../actions/types';

export default (
  state = {
    fetchedItems: [],
    leftMenuOpen: false,
    rightMenuOpen: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PENDING:
      console.log('pending');
      return {
        ...state,
        fetchStatus: action.fetchStatus,
      };
    case FETCH_COMPLETE:
      console.log('complete');
      return {
        ...state,
        fetchStatus: action.fetchStatus,
        fetchedItems: update(state.fetchedItems, { $push: [action.payload] }),
      };
    case FETCH_FAILED:
      console.log('failed');
      return {
        ...state,
        fetchStatus: action.fetchStatus,
        fetchedError: action.payload,
      };
    case REMOVE_PENDING:
      console.log('pending');
      return {
        ...state,
        fetchStatus: action.fetchStatus,
      };
    case REMOVE_COMPLETE:
      // console.log('complete', R.findIndex(R.propEq('id', action.payload))(state.fetchedItems));
      return {
        ...state,
        fetchStatus: action.fetchStatus,
        fetchedItems: update(state.fetchedItems, {
          $splice: [
            [findIndex(propEq('id', action.payload))(state.fetchedItems), 1],
          ],
        }),
      };
    case REMOVE_FAILED:
      console.log('failed');
      return {
        ...state,
        fetchStatus: action.fetchStatus,
        fetchedError: action.payload,
      };
    default:
      return state;
  }
};
