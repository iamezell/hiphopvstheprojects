import Actor from './Actor'

class Kobold extends Actor{
  constructor(game, xVal, yVal, image, name, level) {
  super(game, xVal, yVal, image, name, level)
    this.name = name
  }

}

export default Kobold
