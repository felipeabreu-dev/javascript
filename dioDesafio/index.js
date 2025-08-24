const hero = [
    {name: "Darius", xp: 5473},
    {name: "Orianna", xp: 7563},
    {name: "Ezreal", xp:833}
]

for (i = 0; i <= hero.length; i++) {
    let heroName = hero[i].name;
    let heroXp = hero[i].xp;
    let heroClass = "";

    if(heroXp <= 1000){
        heroClass = "Ferro";
    } else if(heroXp > 1000 && heroXp <= 2000) {
        heroClass = "Bronze";
    } else if(heroXp > 2000 && heroXp <= 5000) {
        heroClass = "Prata";
    } else if(heroXp > 5000 && heroXp <= 7000) {
        heroClass = "Ouro";
    } else if(heroXp > 7000 && heroXp <= 8000) {
        heroClass = "Platina";
    } else if(heroXp > 8000 && heroXp <= 9000) {
        heroClass = "Ascendente";
    } else if(heroXp > 9000 && heroXp <= 10000) {
        heroClass = "Imortal";
    } else {
        heroClass = "Radiante";
    }

    console.log(`O Herói de nome ${heroName} está no nível de ${heroClass}`);
}