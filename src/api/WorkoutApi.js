import {authenticate, app} from './authenticate';

const generateId = (exercise) => {
  return exercise.name.toLowerCase().replace(/\s/g, "-");
};

class WorkoutApi {
  static getRoutines() {

    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return new Promise((resolve, reject) => app
          .database()
          .ref(userId + '/routines')
          .on('value', data => resolve(data.val()), reject));
      });
  }

  static saveRoutine(routine) {
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;
        if (!routine.id) routine.id = generateId(routine);

        return app
          .database()
          .ref(userId + '/routines/' + routine.id)
          .set(routine);
      })
      .then(_ => routine);
  }

  static getExercises() {

    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return new Promise((resolve, reject) => app
          .database()
          .ref(userId + '/exercises')
          .on('value', data => resolve(data.val()), reject));
      });
  }

  static saveExercise(exercise) {
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;
        if (!exercise.id) exercise.id = generateId(exercise);
        return app
          .database()
          .ref(userId + '/exercises/' + exercise.id)
          .set(exercise);
      })
      .then(_ => exercise);
  }

  static deleteExercise(exerciseId) {
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return app
          .database()
          .ref(userId + '/exercises/' + exerciseId)
          .remove();
      });
  }
}

export default WorkoutApi;
