
class OldSyntax {
    constructor() {
        this.name = 'Walt';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `hi, my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax);

//-----*--**--- with transform-class-properties

class NewSyntax {
    name = 'Jen';
    getGreeting = () => {
        return `Hi, soy ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newSyntax);