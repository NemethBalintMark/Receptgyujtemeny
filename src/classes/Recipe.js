export default class Recipe {
    #name;
    #time;
    #difficulty;
    #image;

    constructor(name, time, difficulty, image) {
        this.setName(name);
        this.setTime(time);
        this.setDifficulty(difficulty);
        this.setImage(image);

        this.getName = this.getName.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImage = this.getImage.bind(this);
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

    setImage(image) {
        this.#image = image;
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

    getImage() {
        return this.#image;
    }
}