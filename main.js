var gameData = {
    men: 0,
    food: 0,
    foragers: 0,
    forage_exp: 0,
    forage_lvl: 0,
    forage_exp_goal: 10,
    finders: 0,
    women: 0
}
  
function createMan() {
    if ( gameData.men == 0 ) {
        gameData.men += 1;
        document.getElementById("men").innerHTML = "Men: " + gameData.men + "/1";
        if( gameData.men == 1 ) {
            document.getElementById("btn_forage").style.display = "block";
            document.getElementById("btn_findWoman").style.display = "block";
            gameData.food = 10;
            gameData.foragers = 0;
        }
    }
    if ( gameData.men >= 1) {
        document.getElementById("btn_createMan").disabled = true;
    }
}

function forage() {
    gameData.foragers += 1;
    document.getElementById("food").innerHTML = "Food: " + gameData.food;    
    document.getElementById("btn_forage").disabled = true;  
}

function findWoman() {
    gameData.women += 1;
    gameData.food -= 13;
    document.getElementById("women").innerHTML = "Women: " + gameData.women;

    document.getElementById("btn_findWoman").disabled = gameData.food<13;
}

function tick() {
    var food_rate = gameData.foragers * (1 + 0.1 * gameData.forage_lvl) - gameData.men;
    gameData.food += food_rate;
    if ( gameData.men > 0 ) {
        document.getElementById("food").innerHTML = "Food: " + gameData.food + " (" + food_rate + ")";
    }
    gameData.forage_exp += gameData.foragers;
    if ( gameData.forage_exp > 0 ) {
        document.getElementById("forage_exp").innerHTML = "exp: " + gameData.forage_exp + "/" + gameData.forage_exp_goal + " (" + gameData.foragers + ")";
    }
    if ( gameData.forage_exp >= gameData.forage_exp_goal ) {
        gameData.forage_lvl += 1;
        gameData.forage_exp_goal *= 2;
    }
    document.getElementById("btn_findWoman").disabled = gameData.food<13;
}

var mainGameLoop = window.setInterval(function() {
    tick()
}, 1000)