import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC_xs98EBtNguUsfiuIxjVZuvyk7Z-ToSw",
  authDomain: "expensify-f58e6.firebaseapp.com",
  databaseURL: "https://expensify-f58e6.firebaseio.com",
  projectId: "expensify-f58e6",
  storageBucket: "expensify-f58e6.appspot.com",
  messagingSenderId: "702487841918"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'Wesley Osborne'
});
