class Person {
    constructor(name='Anonymous', age= 0) {
        this.name = name;
        this.age = age;
    }
    getGretting(){
        return `Hi, I am ${this.name}.`;
    }
    getDescription(){
        return `Hi, my name is ${this.name} and I have ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major; // la doble negacion hace q si es undefined nos devuelva falso en vez de undefined o true
    }
    //@Override del padre
    getDescription() {        
        let description = super.getDescription();
        
        if (this.hasMajor()) { // aca nos devuelve verdadero o falso gracias a la !!
            description += ` Major ${this.major}.`;
        }
        
        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGretting() {
        let location = super.getGretting();
        
        if (this.homeLocation) {
            location += `I am visiting from ${this.homeLocation}`;
        }
        return location;
    }
}

console.log(new Person('walter').getGretting());
console.log(new Person('walter', 31).getDescription());
console.log('Probando Students');
console.log(new Student('Alejandro').getGretting());
console.log(new Student('Alejandro', 31, 'Sistemas').getDescription());
console.log('Probando Traveler');
console.log(new Traveler('Juan').getGretting());
console.log(new Traveler('Juan', 31, 'Corrientes').getGretting());
console.log(new Traveler().getGretting());