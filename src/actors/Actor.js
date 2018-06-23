import random from 'lodash/random'

class Actor extends Phaser.Sprite {
  constructor(game, numX, numY, image, atlas, name, level) {
    super(game, numX, numY, image, atlas)
    console.log('hello from constructor')
    this.strength = 10;
    this.name = ''
    this.agility = 10;
    this.wisdom = 10;
    this.intelligence = 10;
    this.inititive = 0;
    this.armor = 0;
    this.hitpoints = 10;
    this.level = level || 0;
    this.skillBonus = 0;
    console.log('lets roll some init')
    this.rollInititive(this.agility)
    this.modifiedStrength = 10;
    this.modifiedAgility = 10;
    this.modifiedWisdom = 10;
    this.modifiedIntelligence = 10;
    this.modifiedArmor = 0;
    this.inventory = [];
  }
  rollInititive = (agility) => {
    let mod = this.agilityModifier(agility) + random(20)
    console.log('the inititive is running and it is : ', mod) 
    this.inititive = mod
  }

  agilityModifier = (agility) => {
    let num = 0;
    if (agility >= 1 && agility <= 10) {
      num = 0
    } else if (agility > 10) {
      num = agility - 10
  }
    return num
  }

  equip = item => {
    item.equip = true;
    //apply current bonuses
    this.modifiedStrength += item.strengthBonus;
    this.modifiedAgility += item.agilityBonus;
    this.modifiedIntelligence += item.intelligenceBonus;
    this.modifiedWisdom += item.wisdomBonus
    // check if the item gives the current class a skill bonus
    if (item.class === this.class) {
      this.skillBonus += item.skillBonus
    }
  }

attack = opponent => {
  let attackChance = 0
  let diff = opponent.level - this.level
  switch (diff) {
    case 0:
      attackChance = 50;
      break;
    case 1:
      attackChance = 40;
      break;
    case 2:
      attackChance = 30;
      break;
    case 3:
      attackChance = 20;
      break;
     case 4:
      attackChance = 10;
      break;
    default:
      attackChance = 0;
  }
  return random(100) < attackChance + this.skillBonus
}

}

export default Actor
