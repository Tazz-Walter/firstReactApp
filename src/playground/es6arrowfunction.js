/* const square = function (x) {
    return x*x;
}

//using ES6
//const squareArrow = (x) => {
 //   return x*x;
//}
// ES6 SE PUEDE RESUMIR EN UNA SOLA LINEA CUANDO ES UNA SOLA LINEA DE CODIGO.
// IMPLICItamente realiza el return del resultado de la operacion.
const squareArrow = (x) => x * x;

console.log(squareArrow(8)); */

// fullname.split('')[0]

// const getFirstname = (name) => name.split(' ')[0];
// console.log(getFirstname('walter olaondo'));

// -------es6-arrowfunction2----------

//arguments object - no longer bound with arrow functions
// en ES5 se podia acceder a los demas argumentos q se pasaban
const add = function(a,b) {
    console.log(arguments);//esto en es6 no funciona mas!!! no se puede acceder a los argumentos
    return a+b;
}
console.log(add(5,2,4));

//"this" kewword - no longer bound

const user = {
    name: 'walter',
    cities: ['corrientes', 'buenos aires'],
    printPlacesLived: function () { //ES5
        // console.log(this.name); //hace referencia a todo lo q este dentro de user
        // console.log(this.cities);
       /*  const that = this;//ES5
        this.cities.forEach(function (city){ 
            //a esta altura this es indefinido amenos q se lo defina afuera de esta funcion
            // console.log(this.name + ' vive ' + city);
            console.log(that.name + ' vive ' + city);

        }); */
        //con ES6 "this" esta bindeado con el padre q seria user por eso puede tomar sus propiedades this.name
        //cuando queremos usar "this" dentro de una funcion para hacer referencia a sus propiedades inmediatas arriba 
        //deberiamos usar ES5. Ahora cuando queremos hacer referencia a las variables atributos del padre deberiamos usar ES6
        
        /* this.cities.forEach((city) => {//this hace referencia a user q es el padre de esta funcion
            console.log(this.name + ' vive ' + city); 
        }) */
        //usando map nos permite modificar y devolver en forma de arreglo el resultado
        //PASO 1
        // const cityMessages = this.cities.map((city) =>{
        //     return this.name + ' vive en ' + city;
        // });
        // return cityMessages;
        //PASO 2
        // return this.cities.map((city) =>{
        //     return this.name + ' vive en ' + city;
        // });
        //PASO 3 PARA APROVECHAR AL MAX ES6
        return this.cities.map((city) => this.name + ' vive en ' + city);

    }
};
console.log(user.printPlacesLived());

const multiplier = {
    number: [5,4,3,2,1],
    multiplyBy: 3,
    multiply() {
        return this.number.map((numb) => numb * this.multiplyBy);
    }
};
console.log(multiplier.multiply());