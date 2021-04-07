class Paladin extends Character {
	constructor(name, specialAttack, specialAttackDmg, hp = 16, dmg = 3, mana = 160) {
		super(hp, dmg, mana)
			this.name = name;
			this.specialAttack = "Healing Lighting";
			this.specialAttackDmg = 4;
	}
}
