(() => {  
    // Tipear a un tipo de dato
    let udf: undefined = undefined;
    let nl: null = null;
    let number: number = 0;
    let string: string = 'string';
    let boolean: boolean = true;
    let stringArray: string[] = ['string'];
    let numbersOrStrings: string | number = number || string;
    let anyType: any = number || string || boolean || stringArray;
    let tupla: [string, number] = ['string', 0];
    enum Data {
        two = 2,
        three = 3,
        one = 1,
        four= 4
    };
    let two: Data = Data.two;    
    function rtVoid(): void { return; }
    const rtString = (): string => { return 'string'; }
    const rtStringOrNumber = (): string | number => { return true ? 'string' : 1; }
    const rtError = (message: string): never => { throw new Error(message); }
    type Hero = {
        name: string;
        age?: number | undefined;
        powerFly: boolean;
    }
    const hero: Hero = { name: 'Batman', age: undefined, powerFly: false }
    interface Villain {
        name: string;
        age?: number | undefined;
        powerFly: boolean;
        generateJump(): void;
    };

    // -----------------------------------------------------------------------------------------------------------

    // Parsear a un tipo de dato
    let a: any = 0;
    a = ("string" as string).toUpperCase();
    a = (<number>100).toFixed(2);
    
    // -----------------------------------------------------------------------------------------------------------

    // Desestructurar objetos
    type Profession = {
        nick: string;
        area: string;
        calification: number;
    };
    const profession: Profession = {
        nick: 'Doctor',
        area: 'Medicina',
        calification: 10
    };
    const { nick, area, calification }: Profession = profession;
    const printProfession = ({ nick }: Profession): void => console.log(nick);
    printProfession(profession)
    
    // -----------------------------------------------------------------------------------------------------------

    // Definición corta para asiganción de propiedades
    class AvengerLong {
        private name: string;
        private age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }
    class AvengerShort {
        constructor(
            private name: string, 
            private age: number
        ) {}
    }

    // -----------------------------------------------------------------------------------------------------------

    // Diferenciar el uso de 'interface' vs 'type'
    interface BaseRs {
        rqUuid: string;
        statusCode: number;
    }
    type Category = {
        id: number;
        name: string;
        aviable: boolean;
    }
    type Person = {             
        id: number;
        name: string;
        age: number;
    }
    interface CategoryRs extends BaseRs {
        category: Category;
    }
    interface PersonRs extends BaseRs {
      person: Person;
    }    

    // -----------------------------------------------------------------------------------------------------------

    // Usar genéricos ya sea para el entrada, salida o lo requerido en funciones
    function applyGeneric<T>(data: T): T { return data; }

    // -----------------------------------------------------------------------------------------------------------

    // Generar y usar decoradores (anotaciones) para clases, métodos y propiedades
    function PrintToConsole(constructor: Function): void {
        console.log(constructor);
    }
    function PrintToConsoleConditional(conditional?: boolean): Function {
        return conditional ?  PrintToConsole : () => {};
    }
    function ValidateAnimalId(): Function {
        return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = (id: number) => {
                return (id < 0) ? console.error('Id invalid') : originalMethod(id);
            }
        }
    }
    function ReadOnly(isWritable: boolean = true): Function {
        return function(target: any, propertyKey: string) {
            const descriptor: PropertyDescriptor = {
                get() {
                    console.log(this);
                    return 'Luis';
                },
                set(this, val) {
                    Object.defineProperty(this, propertyKey, {
                        value: val,
                        writable: !isWritable,
                        enumerable: false
                    })
                }
            };
            return descriptor;
        }
    }
    @PrintToConsoleConditional()
    class Animal {
        @ReadOnly()
        public name: string

        constructor() {}

        @ValidateAnimalId()
        saveAnimal(id: number): void {
            console.log(`Save animal with id ${id}`);
        }
    }

    interface RootObject {
	userId: number;
	id: number;
	title: string;
	body: string;
}
})()
