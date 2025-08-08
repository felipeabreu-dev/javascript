export default class Spaceship {
    constructor(name, capacity, charge) {
        this.name = name;
        this.capacity = capacity;
        this.charge =charge;
    }

    chargeLevel() {
        return this.charge * 100 / this.capacity;
    }
}