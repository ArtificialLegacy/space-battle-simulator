/*
ship classes:
	dreadnought - dread(team, count);
	battle cruiser - cruiser(team, count);
	light cruiser - light(team, count);
	frigate - frigate(team, count);
	carrier - carrier(team, count, fighterCount, transportCount, bomberCount);
	fighter - fighter(team, count);
	transport - trans(team, count);
	bomber - bomb(team, count, payload);
	super weapon - weapon(team, count);
	custom ship - custom(team, count, plasmaCannons, laserCannons, autoTurrets, superLaser, shield, speed, size, armor, payload, fighterCount, transportCount, bomberCount);
	space station - station(team, count, plasmaCannons, fighterCount, transportCount, bomberCount, armor);
	planet - planet(team, count, autoTurrets, plasmaCannons, fighterCount);
*/

/*
values:
	team - number, either 1 or 2
	count - number, amount of that type of ship
	fighterCount - number, amount of fighters stored
	transportCount - number, amount of transports stored
	bomberCount - number, amount of bombers stored
	payload - number, strength of bomber attack (number of bombs)
	plasmaCannons - number, amount of plasma cannons (slow, sluggish defenses)
	laserCannons - number, amount of laser cannons (fast, lightweight defenses)
	autoTurrets - number, amount of auto-turrets (slow, flexible defenses)
	superLaser - number, amount of super lasers (slow, strong defenses)
	shield - number, strenth of the ships shield
	size - number, size of the ship (smaller ship = more flexible)
	armor - number, strength of the ships hull (stronger hull = less flexible)
	speed - number, speed or ability of the ship
*/

//not recomended to mix custom and pre-defined ships (custom ships are alot stronger and harder to balance)

//default values if inputed value is invalid
	let dteam = 0;
	let dcount = 0;
	let dmission1 = 0;
	let dmission2 = 0;
	let dAdvant1 = 0;
	let dAdvant2 = 0;

//settings ("true" or "false")
	let debug = "false";

//put team advantages here (For stuff like home field advantage or surprise attacks):
	let advant1 = 0; //team 1
	let advant2 = 0; //team 2

//put team pilot skill here (for human error and pilot training levels):
	let skillMin1 = 0; //team 1
	let skillMax1 = 0; //team 1
	let skillMain1 = 0; //team 1
	let skillMin2 = 0; //team 2
	let skillMax2 = 0; //team 2
	let skillMain2 = 0; //team 2

//put team formation advantages here 
	let form1 = 0; //team 1
	let form2 = 0; //team 2

//put missions here (1 = planet bombing, 2 = planet defense, 3 = fleet on fleet, 4 = planet strike)
	let mission1 = 0; //team 1
	let mission2 = 0; //team 2

//base values for the main stats go here:
	let power1 = 0; //team 1
	let power2 = 0; //team 2
	let shield1 = 0; //team 1
	let shield2 = 0; //team 2	
	let ability1 = 0; //team 1
	let ability2 = 0; //team 2 


function shipload() {
	//put ship functions here (main battle code, where all the ships are put):
}
