class Fighter extends Character {
	constructor(name, specialAttack = "black panther", specialAttackDmg = 5, hp = 12, dmg = 4, mana = 40) {
		super(hp, dmg, mana)
		this.specialAttack = specialAttack;
		this.name = name;
		this.specialAttackDmg = specialAttackDmg;

		this.attack = function(ennemy) {
			console.log(this.name + " attaque " + ennemy.name);
			ennemy.hp = ennemy.hp - this.dmg;
			console.log(ennemy.name + " a maintenant " + ennemy.hp + " pv");
		}
	}

	
}