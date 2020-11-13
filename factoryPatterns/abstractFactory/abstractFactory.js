/**
*   ? ПРИМЕР РАБОТЫ
*   ! АБСТРАКТНОЙ ФАБРИКИ
*/

class ConcreteFactory1 {
    createObjectA(){
        return new MyFactoryA1();
    }
    createObjectB(){
        return new MyFactoryB1();
    }
}

class ConcreteFactory2 {
    createObjectA(){
        return new MyFactoryA2();
    }
    createObjectB(){
        return new MyFactoryB2();
    }
}

class MyFactoryA1{
    functionA(){
        return 'i am factor A1';
    }
}

class MyFactoryA2{
    functionA(){
        return 'i am factor A2';
    }
}

class MyFactoryB1{
    functionA(){
        return 'i am factor B1';
    }
}

class MyFactoryB2{
    functionA(){
        return 'i am factor B2';
    }
}