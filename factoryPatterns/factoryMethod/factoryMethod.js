/**
*   ? ПРИМЕР РАБОТЫ
*   ! ФАБРИЧНОГО МЕТОДА
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someMethod = function () {
        var product = this.factoryMethod();
        return "Creator: the some creator work " + product.operation();
    };
    return Creator;
}());
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return "result of the conctrect 1";
    };
    return ConcreteProduct1;
}());
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return "result of the conctrect 2";
    };
    return ConcreteProduct2;
}());
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
function clientCode(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someMethod());
    // ...
}
/**
 * Приложение выбирает тип создателя в зависимости от конфигурации или среды.
 */
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('\n\n');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());