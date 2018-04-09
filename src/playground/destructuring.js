// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philidelphia',
//     temp: 88
//   }
// };

// // Object destructuring
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemey',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);
