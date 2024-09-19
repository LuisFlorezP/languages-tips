// Datos primitivos
const execute1 = () => {
  const text = "Hola, me llamo Manz"; 
  const number = 42;
  const bignumber = 12345678901234567890n;
  const boolean = true;
  const symbol = Symbol("unique");
};

// Datos no primitivos
const execute2 = () => {
  const user = { name: "ManzDev" };
  const users = ["ManzDev", "CyberManzDev", "Manz9000"];
};

// Obtener tipo de dato (solo primitivos)
const execute3 = () => {
  const typeBoolean = false;
  console.log(typeof typeBoolean);
};

// Verificar si es del tipo de dato (solo no primitivos)
const execute4 = () => {
  console.log(typeBoolean instanceof Object);
};

// Parsear a número
const execute5 = () => {
  let numberOne = Number.parseInt("1");
  numberOne = Number("1");
  numberOne = parseInt("1");
  console.log(numberOne);
};

// Legibilidad de un gran número
const execute6 = () => {
  let bigNumber = 5_000_000;
};

// Desestructurar objetos
const execute7 = () => {
  const person = {
    name: "Luis",
    age: 19,
    address: {
      a: 1,
      b: 2,
    },
  };
  const {
    name: personName,
    age,
    address: { a },
  } = person;
  console.log(`Name: ${personName}, age: ${age}, a: ${a}`);
};

// Desestructurar arreglos
const execute8 = () => {
  const [, motorcycle] = ["Car", "Motorcycle"];
  console.log(`Vehicle: ${motorcycle}`);
};

// Desestructurar argumentos
const execute9 = () => {
  function desArguments({ name, age }) {
    console.log(`DesArguments - Name: ${name}, age: ${age}`);
  }
  desArguments(person);
};

// Operador ternario
const execute10 = () => {
  const condition = 123 === 123 ? true : false;
  console.log(condition);
};

// Ciclo For of
const execute11 = () => {
  for (const iterator of object) { }
};

// Impresión por consola en forma de tabla
const execute12 = () => {
  console.table(person);
};

// Funciones generator
const execute13 = () => {
  function* generator() {
    yield "First";
    yield "Second";
    yield "Third";
  }

  const values = [...generator()];   // [ 'First', 'Second', 'Third' ]
  console.log(values);
};

// Verificar si es un NaN
const execute14 = () => {
  let a = NaN;
  console.log(Number.isNaN(a));
};

// Aproximar al número entero inferior más cercano
const execute15 = () => {
  const x = ~~(Math.random() * 50);
  console.log(x);
};

// Número de caracteres de un String
const execute16 = () => {
  console.log("Longitud".length);
};

// Diferenciar el uso de preincremento y el postincremento
const execute17 = () => {
  let a = 0;
  while (a < 5) console.log(a, a++, a);
  a = 0;
  while (a < 5) console.log(a, ++a, a);
};

// -----------------------------------------------------------------------------------------------------------

execute17()