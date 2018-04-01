class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!';
    return `Hi. I am ${this.name}!`;
  }
  getDiscription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Andrew Mead', 26);
console.log(me.getGreeting());
console.log(me.getDiscription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDiscription());
