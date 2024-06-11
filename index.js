// Classwork:
// Create a class
// Extend the first class twice
// Extend one of the above classes a third time
// Use any theme/real life thing you like :+1:

class Ft5GroupMember{
    constructor(name,computerBrand){
        this.name = name;
        this.computerBrand = computerBrand;
        this.id = 1;
        this.id++;                                                           
    }


    intro () {
        return `Hello. My name is ${this.name} and I use a ${this.computerBrand}.`
    }


    static sayHi (school) {
        return `Hello I'm a member of ft5 at ${school}`                                     //is this being used correctly or do we need this school?
    }

    // the below isn't working but I can't figure out why
    get getComputerBrand() {            
        return this.computerBrand
    }

    set setComputerBrand(newComputer) {
        this.computerBrand = newComputer;
    }

}

class Tutor extends Ft5GroupMember{
    constructor(name, computerBrand, numberOfYearsTeaching){
        super(name, computerBrand);
        this.numberOfYearsTeaching = numberOfYearsTeaching;
    }
    teachingHistory() {
        return `I have been teaching for ${this.numberOfYearsTeaching} years.`
    }
}

class Student extends Ft5GroupMember{
    constructor(name, computerBrand, homeworkToCatchUpOn){
        super(name, computerBrand);
        this.homeworkToCatchUpOn = homeworkToCatchUpOn;
    }
    overdueWork() {
        return `I need to catch up on the ${this.homeworkToCatchUpOn} work.`
    }
}

class StudentsUpNorth extends Student{
    constructor(name, computerBrand, homeworkToCatchUpOn, hometown) {
        super(name, computerBrand, homeworkToCatchUpOn);
        this.hometown = hometown;
    }
    location() {
        return `I live in ${this.hometown}`
    }
}


const russell = new Tutor("russell", "mac", "many")
russell.updateID;         
console.log(russell.id)                                                                     //not working


const zahra = new StudentsUpNorth("zahra", "mac", "regex", "Leicester")
zahra.setComputerBrand("hp");
console.log(zahra.intro(), zahra.overdueWork(), zahra.location());
console.log(zahra.id)                                                                       //id not working


const manzi = new Ft5GroupMember("manzi", "windows")
console.log(manzi.id)

console.log(Ft5GroupMember.sayHi("the jump"))                                               //understand why static methods are useful         

//question: if there's a method within class which uses a non user defined variable - does it need to be set as this.var = var in constructor?
// from https://www.youtube.com/watch?v=QhFo_L_81Tc 9:48

class Person {
constructor (name) {
    this.name = name;
}

set name(value) {
    //add checks/validation
    this._name = value;
}

get name() {
    return this._name;
}
}

const zahra2 = new Person("zahra");
console.log(zahra2)
zahra2.name = "zahravasanji"
console.log(zahra2)
