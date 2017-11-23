$(document).ready(function() {
$( ".luke" ).click(function() {
  $( ".luke" ).animate({
    width: "40%",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );

  $( ".r2d2" ).animate({
    width: "40%",
    fontSize: "3em",
    color: "red",
    borderWidth: "10px"
  }, 1500 );
});
});

var lukeskywalker = {

    health: 100,
    power: 20,


}

var r2d2 = {

    health: 100,
    power: 16,
    
}

function attack() {

    var attackButton = document.getElementById("attackButton");
    var restartButton = document.getElementById("restartButton");
    var battleMessage = document.getElementById("battleMessage");

    var playerAttack = attackDamage(lukeskywalker.power);
    r2d2.health -= playerAttack;
    attackinfo();

    if (gameOver(r2d2.health)){

    	battleMessage.innerHTML = "Luke Skywalker demolished his opponent!";
    	attackButton.hidden = true;
    	restartButton.hidden = false;
    	return;
    }

    attackButton.disabled = true;
    battleMessage.innerHTML = "R2D2 is about to attack with his popcorn strike attack!";

    setTimeout(function() {
        var opponentAttack = attackDamage(r2d2.power);
        lukeskywalker.health -= opponentAttack;
        attackinfo();

         if (gameOver(lukeskywalker.health)){

    	battleMessage.innerHTML = "R2D2 fried his opponent!";
    	attackButton.hidden = true;
    	restartButton.hidden = false;
    	return;
    }
        attackButton.disabled = false;
    }, 250);


}

function attackDamage (power){

	return Math.floor(Math.random() * power);
}

function gameOver(health) {

		return health <= 0;
}

function restart() {
		lukeskywalker.health = 100;
		r2d2.health = 100;
	 var attackButton = document.getElementById("attackButton").hidden = false;
    var restartButton = document.getElementById("restartButton").hidden = true;
    var battleMessage = document.getElementById("battleMessage").innerHTML = "";
    attackinfo();
}

function attackinfo() {

    document.getElementById("enemy-health").innerHTML = r2d2.health;
    document.getElementById("player-health").innerHTML = lukeskywalker.health;


}

attackinfo();

 
