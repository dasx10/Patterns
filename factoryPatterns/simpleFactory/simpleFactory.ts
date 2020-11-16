interface personData {
    name: string,
    age: number
}

interface SimpleFactory {
    create(type: string, personData: personData): void;
}

class PersonStaticFactory implements SimpleFactory {
    public create(type: string, { name, age }: personData): object {
        switch (type) {
            case 'person':
                return new Person(name, age);
            case 'admin':
                return new Admin(name, age);
            default:
                return new Person(name, age);
        }
    }
}

interface PersonInterface {
    name: string;
    age: number;
}

interface AdminInterface {
    name: string;
    age: number;
    modern: boolean;
}

class Person implements PersonInterface {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Admin implements AdminInterface {
    name: string;
    age: number;
    modern: boolean;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.modern = true;
    }
}


const personFactory = new PersonStaticFactory();
let person = personFactory.create('admin', { name: 'Elena', age: 28 })

console.log(person)