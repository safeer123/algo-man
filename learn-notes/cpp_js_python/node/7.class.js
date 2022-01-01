//----------------- JS Class ---------------------

/*
Classes are primarily syntactic sugar over Javascript's existing 
prototype-based inheritance. The class syntax does not introduce 
a new object-oriented inheritance model to JavaScript.
*/

//---------- Prototype inheritance ---------
function Man(name, age) {
    this.name = name;
    this.age = age;
}

Man.prototype.introduce = function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}`);
};

const personA = new Man("John", 31);
personA.introduce();

//---------------- class -----------


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // This method can only be access by class -> Person.info()
    static info() {
        console.log("I am a Person class, nice to meet you");
    }

    // Each instance will hold this method, implemented using prototype
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }

    // Setter -> obj.nicknames = val
    set nicknames(value) {
        this.nickname = value;
        console.log('Setting nickname -> ', this.nickname);
    }

    // Getter -> val = obj.nicknames
    get nicknames() {
        return this.nickname;
    }

}

const alberto = new Person("Alberto", 26);
Person.info();

// first we call the setter
alberto.nicknames = "Albi";
// "Albi"

// then we call the getter
const nic = alberto.nicknames;
console.log(nic);

// ------------------- Extend a Class ---------------------

class Adult extends Person {
    constructor(name, age, work) {
        super(name, age); // must call this cunstructor to instantiate parent instance
        this.work = work;
    }
}

//------------------ Example - Class extends Array ---------

class Classroom extends Array {
    // we use rest operator to grab all the students
    constructor(name, ...students){
      // we use spread to place all the students in the array individually otherwise we would push an array into an array
      super(...students); // Array parent is instantiated with only students list
      this.name = name;
      // we create a new method to add students
    }
    add(student){
      this.push(student);
    }
  }
  const myClass = new Classroom('1A',
    {name: "Tim", mark: 6},
    {name: "Tom", mark: 3},
    {name: "Jim", mark: 8},
    {name: "Jon", mark: 10},
  );
  
  // now we can call
  myClass.add({name: "Timmy", mark:7});
  myClass[4];
  // Object { name: "Timmy", mark: 7 }
  
  // we can also loop over with for of
  for(const student of myClass) {
    console.log(student);
    }
  // Object { name: "Tim", mark: 6 }
  // Object { name: "Tom", mark: 3 }
  // Object { name: "Jim", mark: 8 }
  // Object { name: "Jon", mark: 10 }
  // Object { name: "Timmy", mark: 7 }