import React from 'react';
import {connect} from 'react-redux';
import * as routineActions from '../../actions/routineActions'
import RoutinesList from './RoutinesList';

class Routines extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.deleteRoutine = this.deleteRoutine.bind(this);
    this.addRoutineRedirect = this.addExerciseRedirect.bind(this);
    this.playRoutine = this.playRoutine.bind(this)
  }

  addExerciseRedirect (){
    window.location = 'rutinas/nueva'
  }

  deleteRoutine (routineId){
    const self = this;
    return function () {
      return self.props.delete(routineId);
    };
  }

  playRoutine (routineId) {
    return function () {
      window.location = 'play/' + routineId
    }
  }

  render() {
    return (<div>
      <h1>Rutinas</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <input type="button" className="btn-primary btn" value="Crear rutina" onClick={this.addExerciseRedirect} />
      </div>
      <RoutinesList routines={this.props.routines} deleteRoutine={this.deleteRoutine} playRoutine={this.playRoutine} />
    </div>);
  }
}


function mapStateToProps(state) {
  return {
    routines: state.routines,
    exercises: state.exercises
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delete: routineId => dispatch(routineActions.deleteRoutine(routineId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routines);