class Monk extends Character {
	constructor(name, specialAttack, specialAttackDmg, hp = 8, dmg = 2, mana = 200) {
		super(hp, dmg, mana)
				this.name = name;
				this.specialAttack = "heal";
				this.specialAttackDmg = 8;
	}
}
