<script setup>

const props = defineProps({
    recipes: Array
})

const imageFromURL = (image) => {
    return new URL(image, import.meta.url).href;
}

const difficulties = {"Könnyű": "text-bg-success", "Közepes": "text-bg-warning", "Nehéz": "text-bg-danger"}

</script>

<template>
    <section v-if="props.recipes.length > 0">
         <div class="container">
            <div class="d-flex elrendezes">
                <div v-for="(recipe, index) in props.recipes" :key="index" class="card mt-3 me-3" style="width: 18rem;">
                    <div class="kep">
                        <img :src="imageFromURL(recipe.getImage())" class="card-img-top w-100" :alt="recipe.getName()"
                            :title="recipe.getName()">
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">{{ recipe.getName() }}</h5>
                        <p class="card-text">Elkészítési idő: {{ recipe.getTime() }} perc</p>
                        <p :class="'badge ' + difficulties[recipe.getDifficulty()]">{{ recipe.getDifficulty() }}</p>
                        <p>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                :data-bs-target="'#exampleModal' + index">
                                Részletek
                            </button>
                        </p>
                    </div>

                    <div class="modal fade" :id="'exampleModal' + index" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ recipe.getName() }}</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>{{ recipe.getDesc() }}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary"
                                        data-bs-dismiss="modal">Bezárás</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="nincs" v-else>
        <p style="font-weight: 700;">Nincs találat!</p>
        <img src="../img/sademoji.webp" alt="szomoruemoji" title="szomoruemoji" style="height: 300px;">
    </section>

</template>

<style scoped>
img {
    width: 300px;
    height: 200px;
}

.card {
    padding-left: 0;
    padding-right: 0;
}

.card {
    transition: all 0.1s ease-in-out;
}

.card:hover {
    background-color: #eeecec;
    border: 5px solid #008000;

}

.nincs {
    text-align: center;
    font-size: 50px;
    color: #ff0000;
    margin-top: 30px;
}

.elrendezes {
    flex-wrap: wrap;
}
</style>
