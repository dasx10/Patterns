var UserStaticFactory = /** @class */ (function () {
    function UserStaticFactory() {
    }
    UserStaticFactory.prototype.create = function (name, age) {
        return new User(name, age);
    };
    return UserStaticFactory;
}());
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var userFactory = new UserStaticFactory();
var user1 = userFactory.create('Elena', 28);
console.log(user1);
