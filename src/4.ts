



class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }

}

class Person {
    constructor(private key: Key) { }
    

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door = false;
    protected tenats: Person[] = [];
    

    constructor(protected key: Key) {}
    
   
     comeIn(person: Person): void {
        if (this.door) {
            this.tenats.push(person);
        } else {
            console.log("Дверь закрыта");
        }
    }

    abstract openDoor(key: Key): void;

}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
            this.door = true;
            console.log("Дверь открыто");
        }
    }
}




const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};