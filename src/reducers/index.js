import {combineReducers} from 'redux';
import routines from './routinesReducers';
import exercises from './exercisesReducers';

const rootReducer = combineReducers({
  routines,
  exercises
});

export default rootReducer;
