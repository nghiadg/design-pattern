class MathSingleton {
  static #instance;

  constructor() {}

  static get instance() {
    if (!MathSingleton.#instance) {
      MathSingleton.#instance = new MathSingleton();
    }

    return MathSingleton.#instance;
  }

  sum(a, b) {
    return (a * 100 + b * 100) / 100;
  }
}

const s1 = MathSingleton.instance;
const s2 = MathSingleton.instance;

console.log(s1.sum(10, 10));
console.log(s2.sum(10, 10));
