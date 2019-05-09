// Declare Person class and define speak() metod

class Person {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
