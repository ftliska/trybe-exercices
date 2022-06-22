/* Parte I - Game Actions Simulator

Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada. */

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danoDragon = (dragon) => {
  const minDmg = 15;
  return Math.floor(Math.random() * (dragon.strength - minDmg + 1) + minDmg);
}

const danoWarrior = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = minDmg * warrior.weaponDmg;
  return Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
}

const danoMage = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaGasta: 0,
    danoCausado: 'Não possui mana suficiente',
  };

  if (mageMana > 15) {
    const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    turnStats.manaGasta = 15;
    turnStats.danoCausado = mageDmg;
    return turnStats;
  };
  return turnStats;
};

const gameActions = {
  turnoWarrior: (danoWarrior) => {
    const ataqueWarrior = danoWarrior(warrior);
    warrior.damage = ataqueWarrior;
    dragon.healthPoints -= ataqueWarrior;
  },
  turnoMage: (danoMage) => {
    const turnoAtaqueMage = danoMage(mage);
    const ataqueMage = turnoAtaqueMage.danoCausado;
    mage.damage = ataqueMage;
    mage.mana -= turnoAtaqueMage.manaGasta;
    dragon.healthPoints -= ataqueMage;
  },
  turnoDragon: (danoDragon) => {
    const ataqueDragon = danoDragon(dragon);
    dragon.damage = ataqueDragon;
    warrior.healthPoints -= ataqueDragon;
    mage.healthPoints -= ataqueDragon;
  },
  turnResults: () => battleMembers,
};

gameActions.turnoWarrior(danoWarrior);
gameActions.turnoMage(danoMage);
gameActions.turnoDragon(danoDragon);
console.log(gameActions.turnResults());


