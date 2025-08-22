import Spaceship from "./spaceship";
import spaceshipEngine from "./spaceshipEngine";

const sophia = new Spaceship("Sophia", 10, 5, 70);
const amsterda = new Spaceship("Amsterdã", 14, 10, 40);
const estrelaAna = new Spaceship("Estrela-Anã", 20, 4, 80);

const sophiaEngine = new spaceshipEngine(sophia);
const amsterdaEngine = new spaceshipEngine(amsterda);
const estrelaAnaEngine = new spaceshipEngine(estrelaAna);

sophiaEngine.turnOn();
amsterdaEngine.turnOn();
estrelaAnaEngine.turnOn();