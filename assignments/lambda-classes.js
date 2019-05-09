// Declare Person class and define speak() method

class Person {
    constructor({
            name,
            age,
            location,
            gender
        }) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Declare Instructor class by extending Person
// and define demo() and grade() methods
class Instructor extends Person {
    constructor({
        name,
        age,
        location,
        gender,
        specialty,
        favLanguage,
        catchPhrase
    }) {
        super({
            name,
            age,
            location,
            gender,
            specialty,
            favLanguage,
            catchPhrase
        });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

