import Actor from './Actor'

class Hero extends Actor{
  constructor(game, xVal, yVal, image, name, level) {
  super(game, xVal, yVal, image, name, level)
    this.name = name
  }

}

export default Hero
