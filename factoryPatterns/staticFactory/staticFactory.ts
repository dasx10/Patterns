interface StaticFactory {
    create(name: string, age: number): void;
}

class UserStaticFactory implements StaticFactory {
    public create(name: string, age: number): object {
        return new User(name, age);
    }
}

interface UserInterface {
    name: string;
    age: number;
}

class User implements UserInterface {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const userFactory = new UserStaticFactory();
let user1 = userFactory.create('Elena', 28)

console.log(user1)