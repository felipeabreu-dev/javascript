export default class spaceshipEngine {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }

    turnOn() {
        let currentChargeChecking = this.checkCurrentPercent();
        let shieldChecking = this.checkShield;
        Promise.all([currentChargeChecking, shieldChecking]). then(results => {
            return this.shieldNormalization(results[1]);
        }).then(newShield => {
            this.spaceship.shield = newShield;
            console.log(`${this.spaceship.name} Partida autorizada - Carga(${this.spaceship.currentCharge}GJ)`);
        }).catch(error => {
            console.log(`${this.spaceship.name} Partida não autorizada: ${error}`);
        });
    }

    checkCurrentPercent() {
        return new Promise((resolve, reject) => {
            let currentCharge = this.spaceship.chargeLevel().toFixed();
            if(currentCharge > 30) {
                resolve(currentCharge);
            } else {
                reject(`Nível de bateria muito baixo`);
            }
        })
    }

    checkShield() {
        return new Promise((resolve, reject) => {
            let doubledShield = this.spaceship.shield * 2; 
            if(doubledShield >= 100) {
                resolve(doubledShield);
            } else {
                reject("Escudo em sobrecarga");
            }
        })
    }

    shieldNormalization(shield) {
        return new Promise((resolve, reject) => {
            let normalShield = shield * 0.7;
            if(normalShield > 120) {
                reject("Escudo em sobrecarga");
            } else {
                resolve(normalShield);
            }
        })
    }
}