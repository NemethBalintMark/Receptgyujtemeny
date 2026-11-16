export default class Recipe {
    #name;
    #time;
    #difficulty;

    constructor(name, time, difficulty) {
        this.setName(name);
        this.setTime(time);
        this.setDifficulty(difficulty);

        this.getName = this.getName.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
    }

    setName(name) {
        this.#name = name;
    }

    setTime(time) {
        this.#time = time;
    }

    setDifficulty(difficulty) {
        this.#difficulty = difficulty;
    }

    getName() {
        return this.#name;
    }

    getTime() {
        return this.#time;
    }

    getDifficulty() {
        return this.#difficulty;
    }
}