import actions from './actionTypes';
import WorkoutApi from '../api/WorkoutApi';
import {objectToArray} from './../utils/transform'

export function loadExercises() {
  return dispatch => WorkoutApi.getExercises()
    .then(dispatchExercises(dispatch))
    .catch(e => {
      throw(e);
    });
}

export function dispatchExercises(dispatch) {
  return exercises => dispatch(loadExercisesSuccess(exercises));
}

export function loadExercisesSuccess(exercises) {
  return {type: actions.LOAD_EXERCISES_SUCCESS, exercises: objectToArray(exercises)};
}

export function saveExerciseSucess(ingredient) {
  return {type: actions.SAVE_EXERCISE_SUCCESS, ingredient};
}

export function saveExercise(excercise) {
  return dispatch => WorkoutApi.saveExercise(excercise)
    .then(exercise => {
      dispatch(saveExerciseSucess(exercise));
      window.location = '/ejercicios'
    })
    .catch(e => {
      throw(e);
    });
}

export function deleteExerciseSucess(exId) {
  return {type: actions.DELETE_EXERCISE_SUCCESS, exId}
}

export function deleteExercise(exId) {
  return dispatch => WorkoutApi.deleteExercise(exId)
    .then(_ => dispatch(deleteExerciseSucess(exId)))
    .catch(e => {throw(e)})
}