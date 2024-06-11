class Ft5GroupMember{
    constructor(name,computerBrand) {
        this.name = name;
        this.computerBrand = computerBrand;
        this.id = 1;                            
        this.id+=1;                                         //not working                                
    }

    get getComputerBrand() {            
        return this.computerBrand
    }

    set setComputerBrand(newComputer) {
        this.computerBrand = newComputer;
    }
    // get computerBrand() {            
    //     return this.computerBrand
    // }

    // set computerBrand(newComputer) {
    //     this.computerBrand = newComputer;
    // }
}


const zahra = new Ft5GroupMember("zahra", "mac")
console.log(zahra.getComputerBrand)
zahra.setComputerBrand = "hp"
console.log(zahra.getComputerBrand)


const russell = new Ft5GroupMember("russell", "windows")
console.log(russell.id)
const russell2 = new Ft5GroupMember("russell", "windows")
russell2.setComputerBrand="mike";
console.log(russell2.id)                                            



//how does this work?

class Person {
constructor (name) {
    this.name = name;
}

set newname(value) {
    //can add checks/validation
    this._myname = value;
}

get newname() {
    return this._myname;
}
}

const zahra2 = new Person("zahra");
console.log(zahra2)
zahra2.newname = "zahravasanji"
console.log(zahra2)
