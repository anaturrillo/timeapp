import React from 'react';
import {connect} from 'react-redux';
import * as exerciseActions from '../../actions/exerciceActions'
import ExerciseForm from './ExerciseForm'

class CreateExercise extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      pic: '',
      description:''
    };

    this.changeExercise = this.changeExercise.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  changeExercise(event){
    const field = event.target.name;
    let exercise = Object.assign({}, this.state);
    exercise[field] = event.target.value;
    this.setState(exercise);
  }

  saveExercise(event){
    event.preventDefault();
    this.props.save(this.state);
  }

  componentWillUpdate(nextProps){
    const exerciseId = this.props.match.params.id;
    const currentState = {...this.state};

    if (exerciseId && !currentState.id) this.setState({...nextProps.exercises.find(e => e.id === exerciseId)});
  }

  render() {

    return (
      <div>

        <h1>Ejercicio</h1>

        <ExerciseForm
          exercise={this.state}
          onSave={this.saveExercise}
          onChange={this.changeExercise}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    save: exercise => dispatch(exerciseActions.saveExercise(exercise))
  };
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateExercise);
