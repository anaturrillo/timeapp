
class Exercise {
  constructor(name, img, duration) {
    this.name = name;
    this.img = img;
    this.duration = duration;
  }
}

class Break {
  constructor(duration, next) {
    this.duration = duration;
    this.name = 'break';
    this.img = 'https://firebasestorage.googleapis.com/v0/b/timeapp-cecba.appspot.com/o/take_a_break.jpg?alt=media&token=2ad2594c-cf3b-40d8-a198-ee5a01c86812';
    this.next = next || {}
  }
}

class End {
  constructor(){
    this.duration = 2;
    this.name = 'routine end';
    this.img = 'algo'
  }
}

class Routine {
  constructor(name, breakDuration, repeat, routineBreakDuration, exercises){
    this.name = name;
    this.exercises = exercises || [];
    this.repeat = repeat;
    this.breakDuration = breakDuration || 1;
    this.routineBreakDuration = routineBreakDuration || 0;
    this.repeat = repeat || 1;
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
    const breakDuration = this.breakDuration;
    const routineBreakDuration = this.routineBreakDuration;
    const repeat = this.repeat;
    const exercises = this.exercises;
    const routine = exercises
      .reduce(function (list, exercise, index) {
        const next = {};

        if (index + 1 < exercises.length) {
          next.name = exercises[index+1].name;
          next.pic = exercises[index+1].img;
          return [...list, exercise, new Break(breakDuration, next)]

        }else {
          return [...list, exercise]
        }


      }, []);

    let trainning = [];
    for (let i=0; i < repeat; i++) {
      trainning = trainning.concat(routine, new Break(routineBreakDuration))
    }
    trainning = trainning.concat(new End());
    return trainning;

    //return routine;

  }
}

class Trainning {
  startTrainning(routine, playRoutine) {

    const completeRoutine = routine.build();
    console.log('completeRoutine', completeRoutine)
    return completeRoutine.reduce(function (ant, exercise) {
      return ant.then(function () {
        return new Promise(function (resolve, reject) {
          playRoutine.changeExercise(exercise);

          setTimeout(resolve, exercise.duration * 1000)
        })
      })
    }, Promise.resolve())
  }
}

export {Break, Exercise, Trainning, Routine}
/*
const ex1 = new Exercise('puente', 'puente.png', 10);
const ex2 = new Exercise('el hombre parado', 'hombre_parado.png', 15);

const rutina = new Routine('miRutina');

rutina.addExercise(ex1);
rutina.addExercise(ex2);

rutina.setBreakDuration(2);
rutina.setRepeat(3);

const trainning = new Trainning();

trainning.startTrainning(rutina);

*/