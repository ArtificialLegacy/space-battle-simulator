//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//do not change these values!!!!!                                                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Space Battle Simulator v0.3                                                                                           //
//By ArtificialLegacy                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function setup() {
	createCanvas(500, 500);
	fill(100);
	rect(0, 0, 500, 500);
	fill(0);
	errorDebug();
	battle();
} //battle load

function varInvalid(v) { 
	vari = v
}

function errorDebug() {
	if (mission1 == undefined) {
		print("Mission1 is Undefined; Setting to Default");
		mission1 = dmission1
	} else {
		if (typeof mission1 === 'string') {
			print("Mission1 is Invalid; Setting to Default");
			mission1 = dmission1
		}
	} //mission1 invalid
	if (mission2 == undefined) {
		print("Mission2 is Undefined; Setting to Default");
		mission2 = dmission2
	} else {
		if (typeof mission2 === 'string') {
			print("Mission2 is Invalid; Setting to Default");
			mission2 = dmission2
		}
	} //mission2 invalid
	if (advant1 == undefined) {
		print("Advant1 is Undefined; Setting to Default");
		advant1 = dAdvant1
	} else {
		if (typeof advant1 === 'string') {
			print("Advant1 is Invalid; Setting to Default");
			advant1 = dAdvant1
		}
	} //advant1 invalid
		if (advant2 == undefined) {
		print("Advant2 is Undefined; Setting to Default");
		advant2 = dAdvant2
	} else {
		if (typeof advant2 === 'string') {
			print("Advant2 is Invalid; Setting to Default");
			advant2 = dAdvant2
		}
	} //advant2 invalid
}

function dread(t, c) {
	count = c
	team = t
	if (team == undefined) {
		print("Team is Undefined; Setting to Default");
		team = dTeam
	} else {
		if (typeof team === 'string') {
			print("Team is Invalid; Setting to Default");
			team = dTeam
		}
	} //team invalid
	if (count == undefined) {
		count = dcount;
		print("Count is Undefined; Setting to Default");
	} else {
		if (typeof count === 'string') {
			count = dcount;
			print("Count is Invalid; Setting to Default");
		}
	} //count invalid
	if (team === 1) { //team 1
		power1 = power1 + 15 * count
		shield1 = shield1 + 7 * count
		if (mission1 === 0) {
			ability1 = ability1 - 4 * count
		} else {
			if (mission1 === 1) {
				ability1 = ability1 + count
			} else {
				if (mission1 === 2) {
					ability1 = ability1 - 6 * count
				} else {
					if (mission1 === 3) {
						ability1 = ability1 - 3 * count
					} else {
						if (mission1 === 4) {
							ability1 = ability1 - 1 * count
						} else {
							print("Invalid Mission Input [1] <" + mission1 + ">");
						}
					}
				}
			}
		}
	} else {
		if (team === 2) { //team 2
			power2 = power2 + 15 * count
			shield2 = shield2 + 7 * count
			if (mission2 === 0) {
				ability2 = ability2 - 4 * count
			} else {
				if (mission2 === 1) {
						ability2 = ability2 + count
				} else {
					if (mission2 === 2) {
						ability2 = ability2 - 6 * count
					} else {
						if (mission2 === 3) {
							ability2 = ability2 - 3 * count
						} else {
							if (mission2 === 4) {
								ability2 = ability2 - 1 * count
							} else {
								print("Invalid Mission Input [2] <" + mission2 + ">");
							}
						}
					}
				}
			}
		} else {
			print("Invalid Team <" + team + ">");
		}
		if (debug === "true") {
			print("Team 1 (power<" + power1 + ">), (shield<" + shield1 + ">), (ability<" + ability1 + ">)");
			print("Team 2 (power<" + power2 + ">), (shield<" + shield2 + ">), (ability<" + ability2 + ">)");
		} //debug
	} 
} //dreadnought

function cruiser(t, c) {
	team = t
	count = c
	if (team == undefined) {
		print("Team is Undefined; Setting to Default");
		team = dTeam
	} else {
		if (typeof team === 'string') {
			print("Team is Invalid; Setting to Default");
			team = dTeam
		}
	} //team invalid
	if (count == undefined) {
		count = dcount;
	} else {
		if (typeof count === 'string') {
			count = dcount;
		}
	} //count invalid
	if (t === 1) { //team 1
		power1 = power1 + 8*count
		shield1 = shield1 + 7*count
		if (mission1 === 0) {
			ability1 = ability1 - 2*count
		} else {
			if (mission1 === 1) {
				ability1 = ability1 - 2*count
			}	else {
				if (mission1 === 2) {
					ability1 = ability1 - 3*count
				} else {
					if (mission1 === 3) {
						ability1 = ability1 + count
					} else {
						if (mission1 === 4) {
							ability1 = ability1 - count
						} else {
							print("Invalid Mission");
						}
					}
				}
			}
		}
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 8*count
			shield2 = shield2 + 7*count
			if (mission2 === 0) {
				ability2 = ability2 - 2*count
			} else {
				if (mission2 === 1) {
					ability2 = ability2 - 2*count
				}	else {
					if (mission2 === 2) {
						ability2 = ability2 - 3*count
					} else {
						if (mission2 === 3) {
							ability2 = ability2 + count
						} else {
							if (mission2 === 4) {
								ability2 = ability2 - count
							} else {
								print("Invalid Mission");
							}
						}
					}
				}
			}
		} else {
			print("Invalid Team")
		}
	}
} //battle cruiser

function light(t, c) {
	team = t
	count = c
	if (team == undefined) {
		print("Team is Undefined; Setting to Default");
		team = dTeam
	} else {
		if (typeof team === 'string') {
			print("Team is Invalid; Setting to Default");
			team = dTeam
		}
	} //team invalid
	if (count == undefined) {
		count = dcount;
	} else {
		if (typeof count === 'string') {
			count = dcount;
		}
	} //count invalid
	if (t === 1) { //team 1
		power1 = power1 + 5*count
		shield1 = shield1 + 4*count
		if (mission1 === 0) {
			ability1 = ability1 - 2*count
		} else {
			if (mission1 === 1) {
				ability1 = ability1 - 3*count
			} else {
				if (mission1 === 2) {
					ability1 = ability1 + 2*count
				} else {
					if (mission1 === 3) {
						ability1 = ability1 + count
					} else {
						if (mission1 === 4) {
							ability1 = ability1 - 2*count
						} else {
							print("Invalid Mission");
						}
					}
				}
			}
		}
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 5*count
			shield2 = shield2 + 3*count
			if (t === 1) { //team 1
				power1 = power1 + 5*count
				shield1 = shield1 + 4*count
				if (mission1 === 0) {
					ability1 = ability1 - 2*count
				} else {
					if (mission1 === 1) {
						ability1 = ability1 - 3*count
					} else {
						if (mission1 === 2) {
							ability1 = ability1 + 2*count
						} else {
							if (mission1 === 3) {
								ability1 = ability1 + count
							} else {
								if (mission1 === 4) {
									ability1 = ability1 - 2*count
								} else {
									print("Invalid Mission");
								}
							}
						}
					}
				}
			}
		} else {
			print("Invalid Team")
		}
	}
} //light cruiser

function frigate(t, c) {
	count = c
	if (t === 1) { //team 1
		power1 = power1 + 3*count
		shield1 = shield1 + 1*count
		ability1 = ability1 + 1*count
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 3*count
			shield2 = shield2 + 1*count
			ability2 = ability2 + 1*count
		} else {
			print("Invalid Team")
		}
	}
} //frigate

function carrier(t, c, f, tr, b) {
	count = c
	fighter = f
	transport = tr
	bomber = b
	if (t === 1) { //team 1
		power1 = power1 + 1*count*fighter + bomber
		shield1 = shield1 + 5*count + transport*2
		ability1 = ability1 + 3*count
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 1*count*fighter + bomber
			shield2 = shield2 + 5*count + transport*2
			ability2 = ability2 + 3*count
		} else {
			print("Invalid Team")
		}
	}
} //carrier

function fighter(t, c) {
	count = c
	if (t === 1) { //team 1
		power1 = power1 + count
		ability1 = ability1 + 2*count
	} else {
		if (t === 2) { //team 2
			power2 = power2 + count
			ability2 = ability2 + 2*count
		} else {
			print("Invalid Team")
		}
	}
} //fighter

function trans(t, c) {
	count = c
	if (t === 1) { //team 1
		shield1 = shield1 + 5*count
		ability1 = ability1 + 2*count
	} else {
		if (t === 2) { //team 2
			shield2 = shield2 + 5*count
			ability2 = ability2 + 2*count
		} else {
			print("Invalid Team")
		}
	}
} //transport

function bomb(t, c, p) {
	count = c
	payload = p
	if (t === 1) { //team 1
		power1 = power1 + 3*count + payload*3
		shield1 = shield1 + 1*count
		ability1 = ability1 + 1*count
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 3*count + payload*3
			shield2 = shield2 + 1*count
			ability2 = ability2 + 1*count
		} else {
			print("Invalid Team")
		}
	}
} //bomber

function weapon(t, c) {
	count = c
	if (t === 1) { //team 1
	power1 = power1 + 125 * count
	shield1 = shield1 + 125 * count
	ability1 = ability1 - 30 * count
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 162 * count
			shield2 = shield2 + 150 * count
			ability2 = ability2 - 10 * count
		} else {
			print("Invalid Team")
		}
	}
} //super weapon

function custom(t, c, pc, lc, at, sl, sh, sp, si, ar, py, fc, tc, bc) {
	team = t
	count = c
	plasma = pc
	laser = lc
	auto = at
	superL = sl
	shield = sh
	speed = sp
	size = si
	armor = ar
	payload = py
	fighter = fc
	transport = tc
	bomber = bc
	if (t === 1) { //team 1
		power1 = power1 + (plasma*2 + laser + auto*2 + superL*50 + fighter)* count - 50 + (payload*bomber)
		shield1 = shield1 + (shield + armor + laser + transport)* count - 50
		ability1 = ability1 + (speed*2 - size - armor + shield - plasma)* count - payload
	} else {
		if (t === 2) { //team 2
			power1 = power1 + (plasma*2 + laser + auto*2 + superL*50 + fighter)* count - 50 + (payload*bomber)
			shield1 = shield1 + (shield + armor + laser + transport)* count - 50
			ability1 = ability1 + (speed*2 - size - armor + shield - plasma)* count - payload
		} else {
			print("Invalid Team");
		}
	}
} //custom ship

function station(t, c, pc, f, tr, b, ar) {
	count = c
	plasma = pc
	fighter = f
	transport = tr
	bomber = b
	armor = ar
	if (t === 1) { //team 1
		power1 = power1 + 1*count*fighter + bomber + plasma*3
		shield1 = shield1 + 5*count + transport*2 + armor*2
		ability1 = ability1 + 3*count + plasma - armor*2
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 1*count*fighter + bomber + plasma*3
			shield2 = shield2 + 5*count + transport*2 + armor*2
			ability2 = ability2 + 3*count + plasma - armor*2
		} else {
			print("Invalid Team");
		}
	}
} //space station

function planet(t, c, at, pc, f) {
	count = c
	auto = at
	plasma = pc
	fighter = f
	if (t === 1) { //team 1
		power1 = power1 + 1*count*fighter + auto*2 + plasma*3
		shield1 = shield1 + 5*count
		ability1 = ability1 + 3*count + plasma - auto
	} else {
		if (t === 2) { //team 2
			power2 = power2 + 1*count*fighter + bomber + plasma*3
			shield2 = shield2 + 5*count + transport*2 + armor*2
			ability2 = ability2 + 3*count + plasma - armor*2
		} else {
			print("Invalid Team")
		}
	}
} //planet

function battle() {
	if (debug === 1) {
		print(power1);
		print(power2);
		print(shield1);
		print(shield2);
		print(ability1);
		print(ability2);
	} //stats debug
	shipload();
	power1 = power1 - shield2 - skillMain2 //power v shield
	power2 = power2 - shield1 - skillMain1 //power v shield
	power1 = power1 + ability1 + advant1*100 - advant2*50 + floor(random(skillMin1, skillMax1)) + skillMain1*10 + form1*10 //power + ability
	power2 = power2 + ability2 + advant2*100 - advant1*50 + floor(random(skillMin2, skillMax1)) + skillMain2*10 + form2*10 //power + ability
	textSize(12);
	text(power1, 225, 275);
	text(power2, 275, 275);
	if (power1 > power2) { //team 1 win detect
		textSize(24);
		text("Team 1 Wins!", 200, 250);
	} else {
		if (power1 < power2) { //team 2 win detect
			textSize(24);
			text("Team 2 Wins!", 200, 250);
		} else {
			if (power1 === power2) { //tie detect
				textSize(24);
				text("It's A Tie!", 200, 250);
			} else {
				print("Invalid Stats");
			}
		}
	}
} //battle algorithm

let buttonX = [];
let buttonY = [];
let buttonW = [];
let buttonH = [];
let buttonC1 = [];
let buttonC2 = [];
let buttonC3 = [];
let buttonT = [];
let buttonS = [];
let buttonWe = [];
let buttonE = [];
let buttonC = 0;
let buttonD = 0;
let bDetX = 0;
let bDetY = 0;
let bDetW = 0;
let bDetH = 0;
let bDetX2 = 0;
let bDetY2 = 0;
let bDetC1 = 0;
let bDetC2 = 0;
let bDetC3 = 0;
let bDetS = 0;
let bDetWe = 0;
let buttonD2 = 0;

function button(x, y, w, h, c1, c2, c3, t, s, we, e) {
	buttonX.push(x);
	buttonY.push(y);
	buttonW.push(w);
	buttonH.push(h);
	buttonC1.push(c1);
	buttonC2.push(c2);
	buttonC3.push(c3);
	buttonT.push(t);
	buttonS.push(s);
	buttonWe.push(we);
	buttonE.push(e);
	buttonC++;
}

function check() {
	buttonD = 0;
	while (buttonD < buttonC) {
		bDetX = buttonX[buttonD];
		bDetY = buttonY[buttonD];
		bDetW = buttonW[buttonD];
		bDetH = buttonH[buttonD];
		bDetX2 = bDetX + bDetW;
		bDetY2 = bDetY + bDetY;
		if (mouseX >= bDetX && mouseX <= bDetX2) {
			if (mouseY >= bDetY && mouseY <= bDetY2) {
				return(buttonE[buttonD]);
			}
		}
		buttonD++;
	}
}
	
function show() {
	buttonD2 = 0;
	while (buttonD2 < buttonC) {
		bDetX = buttonX[buttonD2];
		bDetY = buttonY[buttonD2];
		bDetW = buttonW[buttonD2];
		bDetH = buttonH[buttonD2];
		bDetC1 = buttonC1[buttonD2];
		bDetC2 = buttonC2[buttonD2];
		bDetC3 = buttonC3[buttonD2];
		bDetS = buttonS[buttonD2];
		bDetWe = buttonWe[buttonD2];
		if (bDetS === true) {
			stroke(0);
			strokeWeight(bDetWe);
		} else {
			if (bDetS === false) {
				noStroke();
			}
		}
		fill(100, 100, 100);
		rect(bDetX, bDetY, bDetW, bDetH);
		buttonD2++;
	}
}
