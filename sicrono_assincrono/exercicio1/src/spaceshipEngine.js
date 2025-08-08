export default class spaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

    turnOn() {
        this.checkCurrentPercent().then(currentCharge => {
            console.log(`${this.spaceship.name} - Partida autorizada: Carga atual em ${currentCharge}%`);
        }).catch(currentCharge => {
            console.log(`${this.spaceship.name} - Partida não autorizada: Carga atual em apenas ${currentCharge}%`);
        })
    }

    checkCurrentPercent() {
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.chargeLevel().toFixed();
            if(currentCharge > 30) {
                resolve(currentCharge);
            } else {
                reject(currentCharge);
            }
        })
    }
}