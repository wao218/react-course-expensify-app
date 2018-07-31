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

const database = firebase.database();

database.ref().set({
  name: 'Wesley Osborne',
  age: 26,
  isSingle: false,
  location: {
    city: 'Philidelphia',
    country: 'United States'
  }
}).then(() => {
  console.log('Data is saved!');
}).catch((e) => {
  console.log('This failed.', e);
});

// database.ref().set('This is my data.');

// database.ref('age').set(27);
// database.ref('location/city').set('Bethlehem');

database.ref('attributes').set({
  height: 60,
  weight: 188
}).then(() => {
  console.log('Data is saved.');
}).catch((e) => {
  console.log('There was an issue.', e);
});
