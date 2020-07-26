var gameData = {
    men: 0
}
  
function createMan() {
    gameData.men += 1;
    document.getElementById("men").innerHTML = "Men: " + gameData.men
}