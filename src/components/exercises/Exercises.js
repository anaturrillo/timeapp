import React from 'react';
import {connect} from 'react-redux';
import * as exerciseActions from '../../actions/exerciceActions'
import ExercisesList from './ExercisesList';

class Exercises extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.deleteExercise = this.deleteExercise.bind(this);
    this.addExerciseRedirect = this.addExerciseRedirect.bind(this);
    this.editExercise = this.editExercise.bind(this)
  }

  addExerciseRedirect (){
    window.location = 'ejercicios/nuevo'
  }

  deleteExercise (exId){
    const self = this;
    return function () {
      return self.props.delete(exId);
    };
  }

  editExercise (exerciseId) {
    return function () {
      window.location = 'ejercicios/' + exerciseId

    }
  }

  render() {
    return (<div>
      <h1>Ejercicios</h1>
      <div className="btn-group" role="group" aria-label="Basic example">
        <input type="button" className="btn-primary btn" value="Agregar ejercicio" onClick={this.addExerciseRedirect} />
      </div>
      <ExercisesList exercises={this.props.exercises} deleteExercise={this.deleteExercise} editExercise={this.editExercise} />
    </div>);
  }
}


function mapStateToProps(state) {
  return {
    exercises: state.exercises
  };
}

function mapDispatchToProps(dispatch) {
  return {
    delete: exerciseId => dispatch(exerciseActions.deleteExercise(exerciseId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercises);