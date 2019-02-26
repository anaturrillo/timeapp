import actions from './actionTypes';
import WorkoutApi from '../api/WorkoutApi';
import {objectToArray} from './../utils/transform'

export function loadRoutines() {
  return dispatch => WorkoutApi.getRoutines()
    .then(dispatchRoutines(dispatch))
    .catch(e => {
      throw(e);
    });
}

export function dispatchRoutines(dispatch) {
  return routines => dispatch(loadRoutinesSuccess(routines));
}

export function loadRoutinesSuccess(routines) {
  return {type: actions.LOAD_ROUTINES_SUCCESS, routines: objectToArray(routines)};
}

export function deleteRoutine() {
  
}

export function saveRoutineSucess(routine) {
  return {type: actions.SAVE_ROUTINE_SUCCESS, routine};
}

export function saveRoutine(routine) {
  const newR = {...routine};
  return dispatch => WorkoutApi.saveRoutine(newR)
    .then(_ => {
      dispatch(saveRoutineSucess(newR));
      window.location = '/routines'
    })
    .catch(e => {
      throw(e);
    });
}