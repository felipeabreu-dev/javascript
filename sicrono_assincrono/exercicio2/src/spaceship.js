export default class Spaceship {
    constructor(name, capacity, charge, shield) {
        this.name = name;
        this.capacity = capacity;
        this.charge =charge;
        this.shield = shield;
    }

    chargeLevel() {
        return this.charge * 100 / this.capacity;
    }
}