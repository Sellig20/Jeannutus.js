class Character {
	constructor(name, hp, dmg, mana, state){
		this.name = name;
		this.hp = hp;
		this.dmg = dmg;
		this.mana = mana;
		this.state = state;


		this.attack = function(ennemy) {
			console.log(this.name + " attaque " + ennemy.name);
			ennemy.hp = ennemy.hp - this.dmg;
			console.log(ennemy.name + " a maintenant " + ennemy.hp + " pv");
		}

		
	}	
}
