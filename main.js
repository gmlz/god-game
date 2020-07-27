var gameData = {
    men: {
        current: 0,
        max: 1
    },
    food: 0,
    foragers: 0
}
  
function createMan() {
    if ( gameData.men.current + 1 <= gameData.men.max) {
        gameData.men.current += 1;
        document.getElementById("men").innerHTML = "Men: " + gameData.men.current + "/" + gameData.men.max;
        if( gameData.men.current == 1 ) {
            document.getElementById("btn_forage").style.display = "block";
        }
    }
    if ( gameData.men.current >= gameData.men.max) {
        document.getElementById("btn_createMan").disabled = true;
    }
}

function forage() {
    gameData.foragers += 1;
    document.getElementById("food").innerHTML = "Food: " + gameData.food;
    document.getElementById("btn_forage").disabled = true;
}

function tick() {
    if ( gameData.foragers > 0 ) {
        gameData.food += gameData.foragers;
        document.getElementById("food").innerHTML = "Food: " + gameData.food;
    }
}

var mainGameLoop = window.setInterval(function() {
    tick()
  }, 1000)