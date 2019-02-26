import React from 'react';
import {connect} from 'react-redux';
import {Exercise, Trainning, Routine} from './../../Model'
import PlayExercise from './PlayExercise'

class PlayRoutine extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {trainingStarted: false};

    this.buildRoutine = this.buildRoutine.bind(this);
  }

  componentWillUpdate(nextProps){
    const routineId = this.props.match.params.routineId;
    const currentState = {...this.state};

    if (routineId && !currentState.routineObj) {
      const routine = nextProps.routines.find(e => e.id === routineId);
      const exercisesList = routine.exercises;
      const exercises = exercisesList.map(e => {
        return new Exercise(e.name, e.pic, e.duration)
      });

      const name = routine.name;
      const breakDuration = routine.exerciseBreakDuration;
      const repeat = routine.routineRepetitions;
      const routineBreakDuration = routine.routineBreakDuration;
      const routineObj = new Routine(name, breakDuration, repeat, routineBreakDuration, exercises);
      const training = new Trainning();
      this.setState({...this.state, routineObj, training})

    }
  }

  buildRoutine () {
    this.state.training.startTrainning(this.state.routineObj, this)
      .then(e =>  {
        this.setState({...this.state, trainingFinished: true})
      })
  }

  changeExercise (currentExercise) {
    this.setState({...this.state, currentExercise: currentExercise, trainingStarted:true})
  }

  render() {
    let content = <p>Cargando componente</p>;

    if (this.state.training && !this.state.trainingStarted) {
      content = <input type="button" value="empezar ejercicio" onClick={this.buildRoutine}/>
    }

    if (this.state.currentExercise && this.state.trainingStarted) {
      content = <PlayExercise exercise={this.state.currentExercise} />
    }

    if (this.state.trainingFinished) {
      content = <p>fin de la rutina</p>
    }

    return (<div>
      {content}
    </div>);
  }
}

function mapStateToProps(state) {
  return {
    routines: state.routines
  };
}

export default connect(mapStateToProps, null)(PlayRoutine)
