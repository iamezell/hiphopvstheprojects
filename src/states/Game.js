/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Actor from '../actors/Actor'
import Hero from '../actors/Hero'
import Kobold from '../actors/Kobold'

export default class extends Phaser.State {
  init () {
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.RUNNING_SPEED = 180;
    this.JUMPING_SPEED = 550;
  }
  preload () {}

  create () {
    
    const bannerText = 'Battle Demo'
    const roundText = 'Round'
    const roundNumberText = '0'
    this.gameState = 'startRound1'
    let myHero = new Hero(this.game, this.world.centerX+100, 150, 'mushroom', 'me', 1);
    myHero.equip({strengthBonus: 10})
    let theKobold = new Kobold(this.game, this.world.centerX-100, 150, 'mushroom', 'kobold', 1);
    this.banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    this.round = this.add.text(this.world.centerX, 50, roundText)
    this.roundNumber = this.add.text(this.world.centerX+65, 50, roundNumberText)
    let AttackBtn = this.add.text(50, 50, "attack", { font: "16px Arial", fill: "#ff0044", align: "center" });
    AttackBtn.anchor.set(0.5)
    AttackBtn.inputEnabled = true;
    AttackBtn.events.onInputDown.add(this.onAttack, this);
    //  Register the keys.
    this.leftKey = this.input.keyboard.addKey(69)
    this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    // banner styling
    // this.banner.font = 'Bangers'
    // this.banner.padding.set(10, 16)
    // this.banner.fontSize = 40
    // this.banner.fill = '#77BFA3'
    // this.banner.smoothed = false
    // this.banner.anchor.setTo(0.5)

    // this.round.font = 'Bangers'
    // this.round.padding.set(10, 16)
    // this.round.fontSize = 40
    // this.round.fill = '#77BFA3'
    // this.round.smoothed = false
    // this.round.anchor.setTo(0.5)
   
    // this.roundNumber.font = 'Bangers'
    // this.roundNumber.padding.set(10, 16)
    // this.roundNumber.fontSize = 40
    // this.roundNumber.fill = '#77BFA3'
    // this.roundNumber.smoothed = false
    // this.roundNumber.anchor.setTo(0.5)


    // this.mushroom = new Mushroom({
    //   game: this.game,
    //   x: this.world.centerX,
    //   y: this.world.centerY,
    //   asset: 'mushroom'
    // })

    this.ground = this.add.sprite(0, 500, 'ground');
    this.game.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;

    var platform = this.add.sprite(0, 300, 'platform');
    this.game.physics.arcade.enable(platform);
    platform.body.allowGravity = false;
    platform.body.immovable = true;
    
    //create player
    this.player = this.add.sprite(100, 200, 'player', 3);
    this.player.anchor.setTo(0.5);
    this.player.animations.add('walking', [0, 1, 2, 1], 6, true);
    this.game.physics.arcade.enable(this.player);

    // this.game.add.existing(this.mushroom)
    // this.game.add.existing(myHero)
    // this.game.add.existing(theKobold)
    // place the fighters in a match
    // let match = []
    // match.push(myHero)
    // match.push(theKobold)
  //   let matchArray = match.map((char)=>{
  //     char.rollInititive()
  //     console.log('the char named'+char.name+' has inititive', char.inititive)
  //     return char
  //   }).sort((a,b) => {
  //     if(a.inititive > b.inititive)
  //       return -1
  //     if(a.inititive < b.inititive)
  //       return 1
  //     return 0
  //     })
  //  let attack = matchArray[0].attack(matchArray[1])
  }

  onAttack () {
    console.log('Attack this again')
  }

  update = () => {
   // console.log('updating!!')
   this.physics.arcade.collide(this.player, this.ground);
   this.physics.arcade.overlap(this.player, this.platform, this.landed);

   this.player.body.velocity.x = 0;
   if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
       console.log('left is down')
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      console.log('right is down')
    }
    else
    {
       
      console.log('none is down')
    }
    
  //  switch(this.gameState) {
  //    case 'startRound':
  //      this.gameState = 'endRound'
  //      break;
  //    case 'endRound':
  //      console.log('should see this allot')
  //      break;
  //  }
  }

  landed = () => {
    console.log('landed')
  }

  render () {
    if (__DEV__) {
    //  this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
