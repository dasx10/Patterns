var PersonStaticFactory = /** @class */ (function () {
    function PersonStaticFactory() {
    }
    PersonStaticFactory.prototype.create = function (type, _a) {
        var name = _a.name, age = _a.age;
        switch (type) {
            case 'person':
                return new Person(name, age);
                break;
            case 'admin':
                return new Admin(name, age);
                break;
            default:
                return new Person(name, age);
                break;
        }
    };
    return PersonStaticFactory;
}());
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Admin = /** @class */ (function () {
    function Admin(name, age) {
        this.name = name;
        this.age = age;
        this.modern = true;
    }
    return Admin;
}());
var personFactory = new PersonStaticFactory();
var person = personFactory.create('admin', { name: 'Elena', age: 28 });
console.log(person);
