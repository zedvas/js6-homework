// Classwork:
// Create a class
// Extend the first class twice
// Extend one of the above classes a third time
// Use any theme/real life thing you like :+1:

class ft5GroupMember{
    constructor(name,computerBrand){
        this.name = name;
        this.computerBrand = computerBrand;
    }

    intro () {
        return `Hello. My name is ${this.name} and I use a ${this.computerBrand}.`
    }

    // the below isn't working but I can't figure out why
    // get computerBrand() {            
    //     return this.computerBrand
    // }

    // set computerBrand(newComputer) {
    //     this.computerBrand = newComputer;
    // }

}

class Tutor extends ft5GroupMember{
    constructor(name, computerBrand, numberOfYearsTeaching){
        super(name, computerBrand);
        this.numberOfYearsTeaching = numberOfYearsTeaching;
    }
    teachingHistory() {
        return `I have been teaching for ${this.numberOfYearsTeaching} years.`
    }
}

class Student extends ft5GroupMember{
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

const zahra = new StudentsUpNorth("zahra", "mac", "regex", "Leicester")

console.log(zahra.intro(), zahra.overdueWork(), zahra.location())
