// Parsear a número
let number = Number('1');
console.log(number);

// -----------------------------------------------------------------------------------------------------------

// Desestructurar objetos
const person = {
  name: "Luis",
  age: 19,
  address: {
    a: 1,
    b:2
  }
};
const { 
  name: personName, 
  age, 
  address: { 
    a 
  } 
} = person;
console.log(`Name: ${ personName }, age: ${ age }, a: ${ a }`);

// -----------------------------------------------------------------------------------------------------------

// Desestructurar arreglos
const [, motorcycle] = ['Car', 'Motorcycle'];
console.log(`Vehicle: ${ motorcycle }`);

// -----------------------------------------------------------------------------------------------------------

// Desestructurar argumentos
function desArguments({ name, age }) {
  console.log(`DesArguments - Name: ${ name }, age: ${ age }`);
}
desArguments(person)

// -----------------------------------------------------------------------------------------------------------

// Operador ternario
const condition = 123 === 123 ? true : false;
console.log(condition);

// -----------------------------------------------------------------------------------------------------------

// Ciclo For of
for (const iterator of object) { }

// -----------------------------------------------------------------------------------------------------------

// Impresión por consola en forma de tabla
console.table(person)