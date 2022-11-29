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

/*const playerHp = document.getElementById("playerHp");*/
const containerhpp = document.getElementById("containerhpp");
const playerHps = document.getElementById("playerHp");

/*const enemyHp = document.getElementById("enemyHp");*/
const containerhpe = document.getElementById("containerhpe");
const enemyHp = document.getElementById("enemyHp");
const enemyHps = document.getElementById("enemyHps");
const enemyHp3 = document.getElementById("enemyHp3");

const moneyCounter = document.getElementById("moneyCounter");
const damageCounter = document.getElementById("damage");

const longsword = document.getElementById("longsword")
const bfsword = document.getElementById("bfsword")

let playerHp2 = 590;
let dmgplayer = 50;
let maxHpPlayer = 590;

let kills = 0;

let enemyHp2 = 477;
let dmgminion = 4;

let golds = 0;
let damage = 0;

const changeColor = (button, color) => {
  button.style.backgroundColor = color;
};

const changeTextColor = (button, color) => {
  button.style.color = color;
};

Play.onclick = () => {
  Play.style.display = "none";
  shop.style.display = "block";
  fight.style.display = "block";
  attack.style.display = "none";
  enemy.style.display = "none";
  moneyCounter.style.display = "block";
  longsword.style.display = "none";
  bfsword.style.display = "none";
  enemyHp3.style.display = "none";

  document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
};

window.onload = () => {
  attack.style.display = "none";
  longsword.style.display = "none";
  bfsword.style.display = "none";
};

fight.onclick = () => {
  shop.style.display = "none";
  fight.style.display = "none";
  attack.style.display = "block";
  player.style.display = "block";
  enemy.style.display = "block";
  containerhpp.style.display = "flex";
  containerhpe.style.display = "flex";
  containerp.style.display = "block";
  containere.style.display = "block";
  back.style.display = "block";
  moneyCounter.style.display = "none";
  longsword.style.display = "none";
  enemyHp3.style.display = "block";

  /*playerHps.innerHTML -= playerHps.innerHTML;*/
  playerHps.innerHTML = 590;
  /*enemyHps.innerHTM -= enemyHps.innerHTM;*/
  enemyHp.innerHTM = 477;

  if (enemyHp.innerHTML > 0) {
    const enemydmginterval = setInterval(() => {
      /*playerHp2 -= dmgminion;*/
      /*playerHp.innerHTML = `${playerHp2}`;*/
      playerHps.innerHTML -= dmgminion;
      if (playerHps.innerHTML <= 0 || enemyHp.innerHTML <= 0) {
        clearInterval(enemydmginterval);
      } else if (
        document.body.style.backgroundImage == "url(./res/img/Spawn.png)"
      ) {
        clearInterval(enemydmginterval);
      }
      else if (back.style.display == "none"){
        clearInterval(enemydmginterval);
      }
    }, 1000);
  }

  document.body.style.backgroundImage = "url(./res/img/fightmap.png)";
};

attack.onmousedown = () => {
  if (enemyHp.innerHTML > 0 && playerHps.innerHTML > 0) {
    enemyHp.innerHTML -= dmgplayer;
    player.style.left = "900px";
  }
  if (playerHps.innerHTML > 0 && enemyHp.innerHTML > 0) {
    /*enemyHps.innerHTML -= dmgplayer;*/
    /*enemyHps.innerHTML = `${enemyHp2}`;*/
    player.style.marginLeft = "700px";
  }
  if (enemyHp.innerHTML <= 0) {
    setTimeout(() => {
      document.body.style.backgroundImage = "url(./res/img/Spawn.png)";
      golds += 20;
      kills += 4;
      moneyCounter.innerHTML = `${golds}`;
      containerp.style.display = "none";
      containere.style.display = "none";
      attack.style.display = "none";
      shop.style.display = "block";
      fight.style.display = "block";
      back.style.display = "none";
      moneyCounter.style.display = "block";
      enemyHp3.style.display = "block";
      enemyHp.innerHTML = 477 + kills;
      enemyHps.innerHTML = 477 + kills;
      
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
  bfsword.style.display = "block";
  backs.style.display = "block";

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
  
};

longsword.onclick = () => {
  if (golds >= 350){
      dmgplayer += 10;
      golds -= 350;
      moneyCounter.innerHTML = `${golds}`;
      damageCounter.innerHTML = `${dmgplayer}`;
  }
}

bfsword.onclick = () => {
  if (golds >= 1300){
      dmgplayer += 40;
      golds -= 1300;
      moneyCounter.innerHTML = `${golds}`;
      damageCounter.innerHTML = `${dmgplayer}`;
  }
}

longsword.onmouseover = () => {
  lsinfo.innerHTML = "+10 damage";
}

longsword.onmouseleave = () => {
  lsinfo.innerHTML = "";
}

bfsword.onmouseover = () => {
  bfinfo.innerHTML = "+40 damage";
}

bfsword.onmouseleave = () => {
  bfinfo.innerHTML = "";
}
