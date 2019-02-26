import types from '../actions/actionTypes';

export default function exercisesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_EXERCISES_SUCCESS:
      return action.exercises || [];


    case types.SAVE_EXERCISE_SUCCESS:
      return [...state, Object.assign({}, action.exercises)];

    case types.DELETE_EXERCISE_SUCCESS:
      return [...state.filter(e => e.id !== action.exId)];

    case types.DELETE_EXERCISES_SUCCESS:
      return [...state.filter(e => e.id !== action.exerciseId)];

    default:
      return state;
  }
}
