export default class Recipe {
    #id;
    #name;
    #desc;
    #time;
    #difficulty;
    #image;

    constructor(id, name, desc, time, difficulty, image) {
        this.setId(id);
        this.setName(name);
        this.setDesc(desc);
        this.setTime(time);
        this.setDifficulty(difficulty);
        this.setImage(image);

        this.getId = this.getId.bind(this);
        this.getName = this.getName.bind(this);
        this.getDesc = this.getDesc.bind(this);
        this.getTime = this.getTime.bind(this);
        this.getDifficulty = this.getDifficulty.bind(this);
        this.getImage = this.getImage.bind(this);

        this.setName = this.setName.bind(this);
        this.setDesc = this.setDesc.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setDifficulty = this.setDifficulty.bind(this);
        this.setImage = this.setImage.bind(this);
    }

    setId(id) {
        this.#id = id;
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

    getId() {
        return this.#id;
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

    toJSON() {
        return {
            id: this.getId(),
            name: this.getName(),
            desc: this.getDesc(),
            time: this.getTime(),
            difficulty: this.getDifficulty(),
            image: this.getImage()
        };
    }
}