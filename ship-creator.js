function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	var power;
	var shield;
	var ability;
	var team = int(prompt("What team should the ship be on? (1 or 2)"));
	var count = int(prompt("How many of these ships should there be? (1+)"));
	var plasma = int(prompt("How many plasma cannons should be on the ship?"));
	var laser = int(prompt("How many laser cannons should be on the ship?"));
	var auto = int(prompt("How many auto-turrets should be on the ship?"));
	var weapon = int(prompt("How many super lasers should be on the ship?"));
	var shield = int(prompt("How strong should the shields be?"));
	var speed = int(prompt("How fast should the ship be?"));
	var size = int(prompt("How big should the ship be?"));
	var armor = int(prompt("How strong should the armor be? (hull)"));
	power = power + plasma * 2 + laser + auto * 2 + weapon * 50 * count - 50
	shield = shield + shield + armor + laser * count
	ability = ability + speed * 2 - size - armor + shield - plasma * count
	var pass = "custom(" + team + ", " + count + ", " + plasma + ", " + laser + ", " + auto + ", " + weapon + ", " + shield + ", " + speed + ", " + size + ", " + armor + ");";
	var send = "Your ship code is: " + pass + " ,Power: " + power + " ,Shield: " + shield + " ,Ability: " + ability;
	alert(send);
}
