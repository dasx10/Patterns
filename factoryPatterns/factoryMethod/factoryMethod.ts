/**
*   ? ПРИМЕР РАБОТЫ
*   ! ФАБРИЧНОГО МЕТОДА
*
*   ! -- фабричный метод строится на общих интерфейсах (Основнй класс фабрики не знает о том какой будет результат вызова функции - он просто ее вызывает
*   ! -- с етих причин метод должен иметь одно и то же название )
*   ! в результате получаем динамичный зависимый друго от друга шаблон создания обекта с таким же методом
*/

abstract class Creator {
    public abstract factoryMethod(): Product;
    public someMethod(): string {
        const product = this.factoryMethod();
        return `Creator: the some creator work ${product.operation()}`
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return `result of the conctrect 1`
    }
}


class ConcreteProduct2 implements Product {
    public operation(): string {
        return `result of the conctrect 2`
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod() {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod() {
        return new ConcreteProduct2();
    }
}


function clientCode(creator: Creator) {
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