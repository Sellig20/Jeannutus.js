class Berzerker extends Character {
	constructor(name, specialAttack, specialAttackDmg, hp = 8, dmg = 4, mana = 0) {
		super(hp, dmg, mana)
				this.name = name;
				this.specialAttack = "Rage";
				this.specialAttackDmg = 1;
	}
}
