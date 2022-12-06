const Play = document.getElementById("Play");
const spawn = document.getElementById("spawn");
const shop = document.getElementById("shop");
const fight = document.getElementById("fight");
const back = document.getElementById("back");
const backs = document.getElementById("backs");

const player = document.getElementById("player");
const containerp = document.getElementById("containerp");
const enemy = document.getElementById("enemy");
const containere = document.getElementById("containere");

const attack = document.getElementById("attack");

const containerhpp = document.getElementById("containerhpp");
const playerHps = document.getElementById("playerHp");
const playerHp = document.getElementById("playerHps");

const containerhpe = document.getElementById("containerhpe");
const enemyHp = document.getElementById("enemyHp");
const enemyHps = document.getElementById("enemyHps");
const enemyHp3 = document.getElementById("enemyHp3");
const enemycannon = document.getElementById("enemycannon");

const moneyCounter = document.getElementById("moneyCounter");
const damageCounter = document.getElementById("damage");
const hpCounter = document.getElementById("hpCounter");

const damageitems = document.getElementById("damageitems");
const healthitems = document.getElementById("healthitems");
const longsword = document.getElementById("longsword");
const longswordprice = document.getElementById("longswordprice");
const bfsword = document.getElementById("bfsword");
const bfswordprice = document.getElementById("bfswordprice");
const serrdirk = document.getElementById("serrdirk");
const rcrystal = document.getElementById("rcrystal");
const rcrystalprice = document.getElementById("rcrystalprice");
const rcrystalinfo = document.getElementById("rcrystalinfo");
const kgem = document.getElementById("kgem");
const kgemprice = document.getElementById("kgemprice");
const kgeminfo = document.getElementById("kgeminfo");

const theme = document.getElementById("theme");
const minionkill = document.getElementById("minionkill");

let playerHp2 = 590;
let dmgplayer = 50;
let maxHpPlayer = 590;

let kills = 0;
let enemyHpPlus = 0;
let enemy2HpPlus = 0;

let enemyHp2 = 477;
let dmgminion = 4;
let enemy2Hp = 912;
let dmgcannon = 41;

let golds = 0;
let damage = 0;

const changeColor = (button, color) => {
  button.style.backgroundColor = color;
};

const changeTextColor = (button, color) => {
  button.style.color = color;
};

Play.onclick = () => {
  theme.play();
  theme.volume = 0.1;

  Play.style.display = "none";
  shop.style.display = "block";
  fight.style.display = "block";
  attack.style.display = "none";
  enemy.style.display = "none";
  moneyCounter.style.display = "block";
  longsword.style.display = "none";
  bfsword.style.display = "none";
  enemyHp3.style.display = "none";
  serrdirk.style.display = "none";
  rcrystal.style.display = "none";
  enemycannon.style.display = "none";
  kgem.style.display = "none";

  document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
};

window.onload = () => {
  attack.style.display = "none";
  longsword.style.display = "none";
  bfsword.style.display = "none";
  serrdirk.style.display = "none";
  rcrystal.style.display = "none";
  enemycannon.style.display = "none";
  kgem.style.display = "none";
};

fight.onclick = () => {
  shop.style.display = "none";
  fight.style.display = "none";
  attack.style.display = "block";
  player.style.display = "block";
  /*enemy.style.display = "block";*/
  containerhpp.style.display = "flex";
  containerhpe.style.display = "flex";
  containerp.style.display = "block";
  containere.style.display = "block";
  back.style.display = "block";
  moneyCounter.style.display = "none";
  longsword.style.display = "none";
  enemyHp3.style.display = "block";
  serrdirk.style.display = "none";
  rcrystal.style.display = "none";
  kgem.style.display = "none";

  playerHps.innerHTML = maxHpPlayer;
  playerHp.innerHTML = maxHpPlayer;
  enemyHp.innerHTML = 477;

  if (enemyHp.innerHTML > 0) {
    const enemydmginterval = setInterval(() => {
    
      if (
        enemycannon.style.display == "block" &&
        enemy.style.display == "none"
      ) {
        playerHps.innerHTML -= dmgcannon;
      } else if (
        enemycannon.style.display == "none" &&
        enemy.style.display == "block"
      ) {
        playerHps.innerHTML -= dmgminion;
      }
      if (playerHps.innerHTML <= 0 || enemyHp.innerHTML <= 0) {
        clearInterval(enemydmginterval);
      } else if (
        document.body.style.backgroundImage == "url(./res/img/Spawn.png)"
      ) {
        clearInterval(enemydmginterval);
      } else if (back.style.display == "none") {
        clearInterval(enemydmginterval);
      }
    }, 1000);
  }

  if (kills == 6) {
    enemycannon.style.display = "block";
    enemy.style.display = "none";
    kills = 0;
    enemyHp.innerHTML = 912;
    enemyHps.innerHTML = 912;
  } else if (kills < 6) {
    enemy.style.display = "block";
    enemycannon.style.display = "none";
    enemyHp.innerHTML = 477 + enemyHpPlus;
    enemyHps.innerHTML = 477 + enemyHpPlus;
  }

  document.body.style.backgroundImage = "url(./res/img/fightmap.png)";
};

attack.onmousedown = () => {
  if (enemyHp.innerHTML > 0 && playerHps.innerHTML > 0) {
    enemyHp.innerHTML -= dmgplayer;
    player.style.left = "900px";
  }
  if (playerHps.innerHTML > 0 && enemyHp.innerHTML > 0) {
    player.style.marginLeft = "700px";
  }
  if (enemyHp.innerHTML <= 0) {
    minionkill.play();
    minionkill.currenttime = 0.1;
    minionkill.volume = 0.1;
    setTimeout(() => {
      document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
      if (
        enemycannon.style.display == "block" &&
        enemy.style.display == "none"
      ) {
        golds += 90;
      }
      if (
        enemycannon.style.display == "none" &&
        enemy.style.display == "block"
      ) {
        golds += 43;
      }
      kills++;
      enemyHpPlus += 4;
      moneyCounter.innerHTML = `${golds}`;
      containerp.style.display = "none";
      containere.style.display = "none";
      attack.style.display = "none";
      shop.style.display = "block";
      fight.style.display = "block";
      back.style.display = "none";
      moneyCounter.style.display = "block";
      enemyHp3.style.display = "block";
    }, 1);
  }
};

attack.onmouseup = () => {
  player.style.marginLeft = "0px";
};

shop.onclick = () => {
  moneyCounter.style.display = "block";
  fight.style.display = "none";
  shop.style.display = "none";
  longsword.style.display = "block";
  longswordprice.style.display = "block";
  bfsword.style.display = "block";
  bfswordprice.style.display = "block";
  backs.style.display = "block";
  serrdirk.style.display = "block";
  damageitems.style.display = "block";
  healthitems.style.display = "block";
  rcrystal.style.display = "block";
  enemycannon.style.display = "none";
  kgem.style.display = "block";

  document.body.style.backgroundImage = "url(./res/img/shop.png)";
};

back.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
  Play.style.display = "none";
  shop.style.display = "block";
  fight.style.display = "block";
  attack.style.display = "none";
  enemy.style.display = "none";
  player.style.display = "none";
  back.style.display = "none";
  moneyCounter.style.display = "block";
  containerhpp.style.display = "none";
  containerhpe.style.display = "none";
  longsword.style.display = "none";
  bfsword.style.display = "none";
  backs.style.display = "none";
  serrdirk.style.display = "none";
  rcrystal.style.display = "none";
  enemycannon.style.display = "none";
  kgem.style.display = "none";
};

backs.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
  Play.style.display = "none";
  shop.style.display = "block";
  fight.style.display = "block";
  attack.style.display = "none";
  enemy.style.display = "none";
  player.style.display = "none";
  back.style.display = "none";
  moneyCounter.style.display = "block";
  containerhpp.style.display = "none";
  containerhpe.style.display = "none";
  backs.style.display = "none";
  longsword.style.display = "none";
  bfsword.style.display = "none";
  serrdirk.style.display = "none";
  rcrystal.style.display = "none";
  damageitems.style.display = "none";
  healthitems.style.display = "none";
  enemycannon.style.display = "none";
  kgem.style.display = "none";
};
longsword.onclick = () => {
  if (golds >= 350) {
    dmgplayer += 10;
    golds -= 350;
    moneyCounter.innerHTML = `${golds}`;
    damageCounter.innerHTML = `${dmgplayer}`;
  }
};
longsword.onmouseover = () => {
  lsinfo.innerHTML = "+10 damage";
  longswordprice.innerHTML = "350 golds";
};

longsword.onmouseleave = () => {
  lsinfo.innerHTML = "";
  longswordprice.innerHTML = "";
};

bfsword.onclick = () => {
  if (golds >= 1300) {
    dmgplayer += 40;
    golds -= 1300;
    moneyCounter.innerHTML = `${golds}`;
    damageCounter.innerHTML = `${dmgplayer}`;
  }
};

bfsword.onmouseover = () => {
  bfinfo.innerHTML = "+40 damage";
  bfswordprice.innerHTML = "1300 golds";
};

bfsword.onmouseleave = () => {
  bfinfo.innerHTML = "";
  bfswordprice.innerHTML = "";
};

serrdirk.onclick = () => {
  if (golds >= 1100) {
    dmgplayer += 30;
    golds -= 1100;
    moneyCounter.innerHTML = `${golds}`;
    damageCounter.innerHTML = `${dmgplayer}`;
  }
};

serrdirk.onmouseover = () => {
  dirkinfo.innerHTML = "+30 damage";
  dirkprice.innerHTML = "1100 golds";
};

serrdirk.onmouseleave = () => {
  dirkinfo.innerHTML = "";
  dirkprice.innerHTML = "";
};

rcrystal.onclick = () => {
  if (golds >= 400) {
    maxHpPlayer += 150;
    golds -= 400;
    moneyCounter.innerHTML = `${golds}`;
    hpCounter.innerHTML = `${maxHpPlayer}`;
  }
};

rcrystal.onmouseover = () => {
  rcrystalinfo.innerHTML = "+150 hp";
  rcrystalprice.innerHTML = "400 golds";
};

rcrystal.onmouseleave = () => {
  rcrystalinfo.innerHTML = "";
  rcrystalprice.innerHTML = "";
};

kgem.onclick = () => {
  if (golds >= 800) {
    maxHpPlayer += 250;
    golds -= 800;
    moneyCounter.innerHTML = `${golds}`;
    hpCounter.innerHTML = `${maxHpPlayer}`;
  }
};

kgem.onmouseover = () => {
  kgeminfo.innerHTML = "+250 hp";
  kgemprice.innerHTML = "800 golds";
};

kgem.onmouseleave = () => {
  kgeminfo.innerHTML = "";
  kgemprice.innerHTML = "";
};