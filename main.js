var gameData = {
    men: {
        current: 0,
        max: 1
    },
    food: {
        current: 10
    }
}
  
function createMan() {
    if ( gameData.men.current + 1 <= gameData.men.max) {
        gameData.men.current += 1;
        document.getElementById("men").innerHTML = "Men: " + gameData.men.current + "/" + gameData.men.max;
        if( gameData.men.current == 1 ) {
            document.getElementById("food").innerHTML = "Food: 10 (-1/day)";
            document.getElementById("btn_forage").style.display = "block";
        }
    }
    if ( gameData.men.current >= gameData.men.max) {
        document.getElementById("btn_createMan").disabled = true;
    }
}

function forage() {
    gameData.food.current += 1;
    document.getElementById("food").innerHTML = "Food: " + gameData.food.current + " (-1/day)";
}