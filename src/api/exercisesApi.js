import {authenticate, app} from './authenticate';

const generateId = (ingredient) => {
  return ingredient.name.toLowerCase().replace(/\s/g, "-");
};

class ExApi {
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

  static saveIngredients(ingredients) {


    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;
        return Promise.all(ingredients.map(function (ingredient) {
          ingredient = Object.assign({}, ingredient);
          if (!ingredient.id) ingredient.id = generateId(ingredient);
          return app
            .database()
            .ref(userId + '/ingredients/' + ingredient.id)
            .set(ingredient);
        }));
      })
      .then(_ => ingredients);
  }

  static deleteIngredient(ingredientId) {
    return authenticate(app)
      .then(function (userCredential) {
        const userId = userCredential.user.uid;

        return app
          .database()
          .ref(userId + '/ingredients/' + ingredientId)
          .remove();
      });
  }
}

export default WorkoutApi;
