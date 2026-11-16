export default class Recipe {
    #name;
    #desc;
    #time;
    #difficulty;
    #image;

    constructor(name, desc, time, difficulty, image) {
        this.setName(name);
        this.setDesc(desc);
        this.setTime(time);
        this.setDifficulty(difficulty);
        this.setImage(image);

        this.getName = this.getName.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    setName(name) {
        this.#name = name;
    }

    setDesc(desc) {
        this.#desc = desc;
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

    getDesc() {
        return this.#desc;
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