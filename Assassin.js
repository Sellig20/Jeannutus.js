class Assassin extends Character {
	constructor(name, specialAttack, specialAttackDmg, hp = 6, dmg = 6, mana = 20) {
		super(hp, dmg, mana)
				this.name = name;
				this.specialAttack = "Shadow hit";
				this.specialAttackDmg = 7;
	}
}
