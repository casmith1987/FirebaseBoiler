import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAZvWbu423t8d5O7eEMXZeXtKHF4YvE3DI',
  authDomain: 'shootar-f4c85.firebaseapp.com',
  databaseURL: 'https://shootar-f4c85.firebaseio.com',
  projectId: 'shootar-f4c85',
  storageBucket: 'shootar-f4c85.appspot.com',
  messagingSenderId: '370958758474',
  appId: '1:370958758474:web:3ee12865e1b07139a4acb3',
  measurementId: 'G-M3ST391WNE',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
