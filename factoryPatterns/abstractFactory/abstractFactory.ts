/**
*   ? ПРИМЕР РАБОТЫ 
*   ! АБСТРАКТНОЙ ФАБРИКИ
*/

interface AbstractFactory {
    createObjectA(): AbstractObjectA;
    createObjectB(): AbstractObjectB;
}

interface AbstractObjectA {
    functionA(): string;
}

interface AbstractObjectB {
    functionB(): string;
}

class ConcreteFactory1 implements AbstractFactory {
    public createObjectA(): AbstractObjectA {
        return new MyFactoryA1();
    }

    public createObjectB(): AbstractObjectB {
        return new MyFactoryB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createObjectA(): AbstractObjectA {
        return new MyFactoryA2();
    }

    public createObjectB(): AbstractObjectB {
        return new MyFactoryB2();
    }
}


class MyFactoryA1 implements AbstractObjectA {
    public functionA(): string {
        return 'i am factor A1'
    }
}

class MyFactoryA2 implements AbstractObjectA {
    public functionA(): string {
        return 'i am factor A2'
    }
}

class MyFactoryB1 implements AbstractObjectB {
    public functionB(): string {
        return 'i am factor B1'
    }
}

class MyFactoryB2 implements AbstractObjectB {
    public functionB(): string {
        return 'i am factor B2'
    }
}