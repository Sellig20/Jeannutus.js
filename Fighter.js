class Fighter extends Character {
	constructor(name, specialAttack, specialAttackDmg, hp = 12, dmg = 4, mana = 40) {
		super(hp, dmg, mana)
		this.specialAttack = "Dark Vision";
		this.name = name;
		this.specialAttackDmg = 5;
	}
}



