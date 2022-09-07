class Person {
  constructor(name, mood) {
    this.name = name;
    this.mood = mood;
    if (this.mood === undefined) {
      this.mood = "frightened"
    }
  }
}




module.exports = Person
