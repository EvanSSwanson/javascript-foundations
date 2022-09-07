var robbings = 0

class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job;
    if (this.job === undefined) {
      this.job = "scallywag"
    }
    this.cursed = false;
    this.booty = 0;
    this.robbings = 0;
  }
  robShip() {
    this.robbings = (this.robbings + 1)
    if (this.robbings > 5) {
      this.cursed = true
      return "ARG! I've been cursed!"
    } else {
      this.booty = (this.booty + 100)
      return "YAARRR!"
    }
  }

  liftCurse() {
    if (this.cursed === true && this.booty >= 300) {
      this.booty = (this.booty - 300);
      this.cursed = false;
      return "Your curse has been lifted!"
    } else {
      return "You don't need to lift a curse!"
    }
  }
}






module.exports = Pirate
