import types from '../actions/actionTypes';

export default function routinesReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_ROUTINES_SUCCESS:
      return action.routines || [];

    case types.SAVE_ROUTINE_SUCCESS:
      return [...state, action.routine];

    case types.UPDATE_ROUTINES_SUCCESS:
      return [...state.filter(e => e.id !== action.routine.id), Object.assign({}, action.routine)];

    case types.DELETE_ROUTINES_SUCCESS:
      return [...state.filter(e => e.id !== action.routineId)];

    default:
      return state;
  }
}
