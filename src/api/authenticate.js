import * as firebase from 'firebase';

export const app = firebase.initializeApp({
  apiKey: "AIzaSyD6G8tk8m0DhhTw6RCSYeMYQwnJwX7ziCQ",
  authDomain: "timeapp-cecba.firebaseapp.com",
  databaseURL: "https://timeapp-cecba.firebaseio.com",
  projectId: "timeapp-cecba",
  storageBucket: "timeapp-cecba.appspot.com",
  messagingSenderId: "574863700583"
});


export function authenticate(app) {
  return app.auth().signInWithEmailAndPassword('anaturrillo@gmail.com', 'juan3984');
}
