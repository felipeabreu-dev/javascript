import { Planet } from "./planet";
import solarSystem from "./solar_system";
import moment from "moment";

const earth = new Planet("Terra", 50100000);
earth.rotate();

solarSystem.planets.push(earth);
solarSystem.planets.push(new Planet("Marte", 144800000));
solarSystem.planets.push(new Planet("Mercurio", 74800000));

console.log(solarSystem);

console.log(moment().format('h:mm'));