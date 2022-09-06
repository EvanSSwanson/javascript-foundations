var amount = 0

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }

greet() {
  return `Hi, ${this.rider}!`
}

eat() {
  amount = amount + 1
  if (amount > 2) {
    this.hungry = false;
  }
}
}

module.exports = Dragon;
