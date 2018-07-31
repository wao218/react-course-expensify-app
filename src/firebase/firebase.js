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

database.ref('isSingle').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });
