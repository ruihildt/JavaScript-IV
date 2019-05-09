// Declare Person class and define speak() method

class Person {
constructor({name, age, location, gender}) {
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
            specialty,
            favLanguage,
            catchPhrase
        }) {
        super(arguments[0]);
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// Declare Student class by extending Person and define
// listsSubjects(), PRAssignement() and sprintChallenge() methods
class Student extends Person {
    constructor({
        previousBackground,
        className,
        favSubjects
    }) {
        super(arguments[0]);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listsSubjects() {
        // Need to make it enumerate one by one
        console.log(this.favSubjects);
    }

    PRAssignement(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Declare ProjectManager class by extending Instructors and define
// standUp() and debugsCode() methods

class ProjectManager extends Instructor {
    constructor({
        gradClassName,
        favInstructor
    }) {
        super(arguments[0]);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standby times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}



// Instanciate Fred the Instructor
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

// Instanciate Jean the Student

const jean = new Student({
    name: 'Jean',
    location: 'Hong Kong',
    age: 21,
    gender: 'non-binary',
    previousBackground: 'Back-end',
    className: `WebWorld125`,
    favSubjects: ['Prototypes','CSS', 'Containers']
});

// Instanciate Rick the ProjectManager

const rick = new ProjectManager ({
    name: 'Rick',
    location: 'Universe',
    age: 78,
    gender: 'male',
    favLanguage: 'Basic',
    specialty: 'Time Travelling',
    catchPhrase: 'wubba lubba dub dub',
    gradClassName: 'Webspace99',
    favInstructor: 'Morty'
})