class User {
  #name;
  #age;
  #email;

  constructor(name, age, email) {
    this.#name = name;
    this.#age = age;
    this.#email = email;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  getEmail() {
    return this.#email;
  }

  setName(name) {
    this.#name = name;
  }
  setAge(age) {
    this.#age = age;
  }
  setEmail(email) {
    this.#email = email;
  }

  getAgeCategory() {
    if (this.#age < 18) return "Minor";
    else if (this.#age >= 18 && this.#age <= 60) return "Adult";
    else return "Senior";
  }
}
