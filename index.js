const heroName = "Joaozinho Lendario";
const journey = "medium";
const enemy = "hard";
let finalLevel = "";
let xpHero = 0;

const levelData = [
    { journey: "easy", enemy: "easy", xp: 900 },
    { journey: "easy", enemy: "medium", xp: 1800 },
    { journey: "easy", enemy: "hard", xp: 3600 },
    { journey: "medium", enemy: "easy", xp: 4200 },
    { journey: "medium", enemy: "medium", xp: 5400 },
    { journey: "medium", enemy: "hard", xp: 6900 },
    { journey: "hard", enemy: "easy", xp: 8500 },
    { journey: "hard", enemy: "medium", xp: 9400 },
    { journey: "hard", enemy: "hard", xp: 15000 }
];

for (let i = 0; i < levelData.length; i++) {
    if (journey === levelData[i].journey && enemy === levelData[i].enemy) {
        xpHero = levelData[i].xp;
        break;
    }
}

if (xpHero < 1000) {
    finalLevel = "Ferro";
} else if (xpHero < 2000) {
    finalLevel = "Bronze";
} else if (xpHero < 5000) {
    finalLevel = "Prata";
} else if (xpHero < 7000) {
    finalLevel = "Ouro";
} else if (xpHero < 8000) {
    finalLevel = "Platina";
} else if (xpHero < 9000) {
    finalLevel = "Ascendente";
} else if (xpHero < 10000) {
    finalLevel = "Imortal";
} else {
    finalLevel = "O Herói foi de base";
}

console.log(`O herói ${heroName} atingiu o nível de ${finalLevel} com ${xpHero} pontos de experiência.`);
