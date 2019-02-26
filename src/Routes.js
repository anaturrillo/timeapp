import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './components/common/Menu';
import Routines from './components/routines/Routines'
import CreateRoutine from './components/routines/CreateRoutine'
import Exercise from './components/exercises/Exercises'
import ExerciseForm from './components/exercises/CreateExercise'
import PlayRoutine from './components/play/PlayRoutine'
import NoMatch from './components/common/NoMatch'

const Index = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
      <div>
        <Menu/>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/rutinas/nueva" component={CreateRoutine} />
          <Route path="/rutinas" component={Routines} />
          <Route path="/ejercicios/nuevo" component={ExerciseForm} />
          <Route path="/ejercicios/:id" component={ExerciseForm} />
          <Route path="/ejercicios" component={Exercise} />
          <Route path="/play/:routineId" component={PlayRoutine} />
          <Route component={NoMatch}/>
        </Switch>

      </div>
  </Router>
);

export default AppRouter;