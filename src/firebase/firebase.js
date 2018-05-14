import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDUgzgPfneZjzB2CllZCmoofHfgKiwYZO0',
  authDomain: 'electric-folio-146120.firebaseapp.com',
  databaseURL: 'https://electric-folio-146120.firebaseio.com',
  projectId: 'electric-folio-146120',
  storageBucket: 'electric-folio-146120.appspot.com',
  messagingSenderId: '807844876082',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
