const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_PLAYER_HAEL = "PLAYER_HEAL";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

let hasBonusLife = true;
let choosenMaxHealth = 100;
let currentMonsterHealth = choosenMaxHealth;
let currentPlayerHealth = choosenMaxHealth;
let battleLog = [];

function getMaxLiveValue() {
  const enteredvalue = prompt(
    "maximum health for you and for the monster",
    "100"
  );
  const paresedValue = parseInt(enteredvalue);

  if (isNaN(paresedValue) || paresedValue <= 0) {
    throw { message: "Invalid user input, not a number!" };
  }
  return paresedValue;
}

try {
  choosenMaxHealth = getMaxLiveValue();
} catch (error) {
  console.log(error);
  choosenMaxHealth = 100;
  alert("you entered something wrong, default 100 was used!");
}

adjustHealthBars(choosenMaxHealth);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finaltMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth,
  };
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "MONSTER",
        finaltMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_PLAYER_HAEL:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finaltMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry = {
        event: ev,
        value: val,
        target: "PLAYER",
        finaltMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finaltMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth,
      };
      break;
  }
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "MONSTER",
  //     finaltMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HAEL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finaltMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: "PLAYER",
  //     finaltMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finaltMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = choosenMaxHealth;
  currentPlayerHealth = choosenMaxHealth;
  resetGame(choosenMaxHealth);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert("You would be dead but the bonus life saved you!");
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You Won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      playerDamage,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
    alert("You lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      playerDamage,
      "PLAYER LOST",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("DRAW");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      playerDamage,
      "DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMode(mode) {
  let maxDamage;
  // let logEntry;
  if (mode === MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
  } else if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function onHeal() {
  let healValue;
  if (currentPlayerHealth >= choosenMaxHealth - HEAL_VALUE) {
    alert("You can't heal more than your max initial health");
    healValue = choosenMaxHealth - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  writeToLog(
    LOG_EVENT_PLAYER_HAEL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  endRound();
}

function onAttack() {
  attackMode(MODE_ATTACK);
}

function onStrongAttack() {
  attackMode(MODE_STRONG_ATTACK);
}

function onLog() {
  for (let i = 0; i < 3; i++) {
    console.log("hello three times");
  }
  let j = 0;
  do {
    console.log(j);
    j++;
  } while (j < 5);
  // for (let i = 10; i > 0; i--) {
  //   console.log(i);
  // }
  // for (let i = 0; i < battleLog.length; i++) {
  //   console.log(battleLog[i]);
  // }
  // for(const logEntry of battleLog) {
  //   console.log(logEntry)
  // }
  let i = 0;
  for (const logEntry of battleLog) {
    console.log(`#${i}`);
    for (const key in logEntry) {
      console.log(`${key} ==> ${logEntry[key]}`);
    }
    i++;
  }
}

attackBtn.addEventListener("click", onAttack);
strongAttackBtn.addEventListener("click", onStrongAttack);
healBtn.addEventListener("click", onHeal);
logBtn.addEventListener("click", onLog);
