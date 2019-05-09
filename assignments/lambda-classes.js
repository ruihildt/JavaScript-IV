// Declare Person class and define speak() method

class Person {
constructor(dataPerson) {
    this.name = dataPerson.name;
    this.age = dataPerson.age;
    this.location = dataPerson.location;
    this.gender = dataPerson.gender;
}

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

// Declare Instructor class by extending Person
// and define demo() and grade() methods
class Instructor extends Person {
    constructor(dataInstructor) {
        super(dataInstructor);
        this.specialty = dataInstructor.specialty;
        this.favLanguage = dataInstructor.favLanguage;
        this.catchPhrase = dataInstructor.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

// Declare Student class by extending Person and define
// listsSubjects(), PRAssignement() and sprintChallenge() methods
class Student extends Person {
    constructor(dataStudent) {
        super(dataStudent);
        this.previousBackground = dataStudent.previousBackground;
        this.className = dataStudent.className;
        this.favSubjects = dataStudent.favSubjects;
    }

    listsSubjects() {
        for (var i = 0; i < this.favSubjects.length; i++) {
            console.log(this.favSubjects[i]);
            };
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
    constructor(dataPM) {
        super(dataPM);
        this.gradClassName = dataPM.gradClassName;
        this.favInstructor = dataPM.favInstructor
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standby times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`);
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