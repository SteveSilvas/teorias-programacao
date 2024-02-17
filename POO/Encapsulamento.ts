class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    public getAge() {
      return this.age;
    }
  
    public setAge(age: number) {
      if (age >= 0) {
        this.age = age;
      } else {
        console.error('Age cannot be negative.');
      }
    }
  }
  
  const person = new Person('Alice', 30);
  
  person.greet();
  console.log(`Age: ${person.getAge()}`);
  person.setAge(35); 
  