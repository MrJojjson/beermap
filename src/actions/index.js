/*  eslint-disable no-unused-vars    */

import { todosRef } from '../config/firebase';
import {
  FETCH_PENDING,
  FETCH_COMPLETE,
  FETCH_FAILED,
  REMOVE_PENDING,
  REMOVE_COMPLETE,
  REMOVE_FAILED,
  TOGGLE_RIGHT_MENU,
  TOGGLE_LEFT_MENU,
} from './types';

export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
};

export const fetching = () => async dispatch => {
  dispatch({
    type: FETCH_PENDING,
    fetchStatus: 'pending',
  });

  todosRef.on(
    'child_added',
    snapshot => {
      const object = { id: snapshot.key, value: snapshot.val() };
      dispatch({
        type: FETCH_COMPLETE,
        payload: object,
        fetchStatus: 'complete',
      });
    },
    error => {
      dispatch({
        type: FETCH_FAILED,
        payload: error.val(),
        fetchStatus: 'failed',
      });
    }
  );
};

export const removing = () => async dispatch => {
  dispatch({
    type: REMOVE_PENDING,
    fetchStatus: 'pending',
  });

  todosRef.on(
    'child_removed',
    snapshot => {
      const object = { id: snapshot.key, value: snapshot.val() };
      console.log('object', object);
      dispatch({
        type: REMOVE_COMPLETE,
        payload: snapshot.key,
        fetchStatus: 'complete',
      });
    },
    error => {
      dispatch({
        type: REMOVE_FAILED,
        payload: error.val(),
        fetchStatus: 'failed',
      });
    }
  );
};

export const toggleRightMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_RIGHT_MENU,
  });
};

export const toggleLeftMenu = () => dispatch => {
  dispatch({
    type: TOGGLE_LEFT_MENU,
  });
};
/*  eslint-enable no-unused-vars    */
