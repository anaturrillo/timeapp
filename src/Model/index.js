
class Exercise {
  constructor(name, img, duration) {
    this.name = name;
    this.img = img;
    this.duration = duration;
  }
}

class Break {
  constructor(duration) {
    this.duration = duration;
    this.name = 'break';
    this.img = 'cafecito.png';
  }
}

class Routine {
  constructor(name, breakDuration, repeat){
    this.name = name;
    this.exercises = [];
  }

  setBreakDuration(duration) {
    this.breakDuration = duration;
  }

  setRoutineBreakDuration(duration) {
    this.routineBreakDuration = duration;
  }

  setRepeat(repeat) {
    this.repeat = repeat;
  }

  addExercise(exercise) {
    this.exercises = [...this.exercises, exercise]
  }

  removeExercise(name) {
    this.exercises = this.exercises.filter(function (elem) {
      return elem.name !== name
    })
  }

  build() {
    const breakDuration = this.breakDuration || 1;
    const routineBreakDuration = this.routineBreakDuration || 2;
    const repeat = this.repeat || 1;

    const routine = this.exercises.reduce(function (list, exercise) {
      return [...list, exercise, new Break(breakDuration)]
    }, []);

    let trainning = [];

    for (let i=0; i < repeat; i++) {
      trainning = [... trainning, routine, new Break(routineBreakDuration)]
    }

    return trainning;

  }
}

class Trainning {
  startTrainning(routine) {
    const completeRoutine = routine.build();

    return completeRoutine.reduce(function (ant, exercise) {
      return ant.then(function () {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            console.log('haciendo ejercicio', exercise);
            resolve()
          }, exercise.duration * 1000)
        })
      })
    }, Promise.resolve())
  }
}


const ex1 = new Exercise('puente', 'puente.png', 10);
const ex2 = new Exercise('el hombre parado', 'hombre_parado.png', 15);

const rutina = new Routine('miRutina');

rutina.addExercise(ex1);
rutina.addExercise(ex2);

rutina.setBreakDuration(2);
rutina.setRepeat(3);

const trainning = new Trainning();

trainning.startTrainning(rutina);

