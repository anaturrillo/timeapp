import React from 'react';
import {connect} from 'react-redux';
import * as routineActions from '../../actions/routineActions'
import NumberInput from './../common/NumberInput'
import TextInput from './../common/TextInput'

class CreateRoutine extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      routine: {
        name: '',
        exercises: [],
        description:'',
        exerciseBreakDuration: 0,
        routineBreakDuration: 0,
        routineRepetitions: 0
      }

    };

    this.changeRoutine = this.changeRoutine.bind(this);
    this.saveRoutine = this.saveRoutine.bind(this);
    this.addExercise = this.addExercise.bind(this);
    this.onExerciseDurationChange = this.onExerciseDurationChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState(Object.assign({}, this.state, {allExercises: nextProps.exercises}));
  }

  onExerciseDurationChange(exId) {
    const self = this;
    const routine = Object.assign({}, this.state.routine);
    return function (event) {
      const exercise = Object.assign({}, routine.exercises.find(e => e.id === exId));
      exercise.duration = event.target.value;
      const newExercises = routine.exercises.filter(e => e.id !== exId);

      self.setState(Object.assign(
        {},
        Object.assign(
          {},
          self.state,
          {routine: Object.assign({}, self.state.routine, {exercises: [...newExercises, exercise]})}
        )
      ))
    }
  }

  changeRoutine(event){
    const field = event.target.name;
    let routine = Object.assign({}, this.state.routine);
    routine[field] = event.target.value;
    this.setState({...this.state, routine});
  }

  addExercise(event){
    event.preventDefault();
    const exId = event.target.value;
    const ex = this.state.allExercises.find(e => e.id === exId);
    const exercises = [...this.state.routine.exercises, ex];

    const allExercises = this.state.allExercises.filter(e => e.id !== exId);
    const newState = Object.assign(
      {},
      this.state,
      {routine: Object.assign({}, this.state.routine, {exercises: exercises})},
      {allExercises:allExercises}
    );

    this.setState(newState)
  }

  saveRoutine(event){
    event.preventDefault();
    this.props.save(this.state.routine);
  }

  render() {
    const routine = this.state.routine;
    return (
      <div>
        <h1>Rutina</h1>
        <div>
          <div>
            <TextInput value={routine.name} name="name" label="Nombre" onChange={this.changeRoutine} />
            <NumberInput value={routine.exerciseBreakDuration} name="exerciseBreakDuration" label="Descanso entre ejercicios" onChange={this.changeRoutine}/>
            <NumberInput value={routine.routineRepetitions} name="routineRepetitions" label="Repeticiones de la rutina" onChange={this.changeRoutine}/>
            <NumberInput value={routine.routineBreakDuration} name="routineBreakDuration" label="Descanso entre rutinas" onChange={this.changeRoutine}/>
            <h2>Ejercicio de esta rutina</h2>
            <table>
              <tbody>
              {this.state.routine.exercises.map(function (e) {
                return (<tr key={e.id}>
                  <td>{e.name}</td>
                  <td>foto</td>
                  <td><NumberInput name="duration" label="duracion" onChange={this.onExerciseDurationChange(e.id)} /></td>
                </tr>)
              }, this)}
              </tbody>
            </table>
          </div>

          <div>
            <h2>Todos los ejercicios</h2>
            <table>
              <tbody>
              <tr>
                <th>Nombre</th>
                <th></th>
                <th></th>
              </tr>
              {this.state.allExercises && this.state.allExercises.map(function (e) {
                return (<tr key={e.id}>
                  <td>{e.name}</td>
                  <td>foto</td>
                  <td><button onClick={this.addExercise} value={e.id}>+</button></td>
                </tr>)
              }, this)}
              </tbody>
            </table>
          </div>

          <div>
            <button onClick={this.saveRoutine}>Guardar</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    save: routine => dispatch(routineActions.saveRoutine(routine))
  };
}

function mapStateToProps(state) {
  return {
    exercises: state.exercises
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoutine);
