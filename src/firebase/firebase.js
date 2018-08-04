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


database.ref('expenses').push({
  description: 'First expense',
  note: '',
  amount: '1000',
  createdAt: 12334
});

database.ref('expenses').push({
  description: 'Second expense',
  note: '',
  amount: '153450',
  createdAt: 134235345
});

database.ref('expenses').push({
  description: 'Third expense',
  note: '',
  amount: '34556',
  createdAt: 6757467
});

// database.ref('notes/-LJ4eWbsY6dALErCW7IR').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 3500);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Wesley Osborne',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philidelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e)
//   });
