<script setup>
import { ref } from 'vue';
import Recipe from '../classes/Recipe.js';

const emit = defineEmits(["addRecipe"]);

const name = ref("");
const desc = ref("");
const time = ref();
const diff = ref("selectOne");
const img = ref("");

const errorMessage = ref("");

const addRecipe = () => {
    let inputResult = checkInput();

    if (inputResult.result) {
        emit("addRecipe", new Recipe(name.value, desc.value, time.value, diff.value, img.value));

        name.value = desc.value = time.value = img.value = "";
        diff.value = "selectOne";
    } else {
        errorMessage.value = inputResult.message;
    }
}

const checkInput = () => {
    if (name.value.length == 0) {
        return { result: false, message: "A név nem lehet üres!" };
    } else if (desc.value.length == 0) {
        return { result: false, message: "A leírás nem lehet üres!" };
    } else if (time.value.length == 0 || time.value == 0) {
        return { result: false, message: "Az idő nem lehet 0 vagy üres!" };
    } else if (diff.value == "selectOne") {
        return { result: false, message: "Válassz nehézségi szintet!" };
    } else if (img.value.length == 0) {
        return { result: false, message: "Az URL nem lehet üres!" };
    } else {
        return { result: true, message: "Sikeres!" };
    }
}

</script>

<template>
    <section>
        <div class="container addRecipeContainer">
            <form class="text-center">
                <div class="mb-3">
                    <div v-if="errorMessage.length > 0" class="alert alert-danger">
                        {{ errorMessage }}
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Név:</label>
                    <input v-model="name" type="text" class="form-control">
                </div>

                <div class="mb-3">
                    <label class="form-label">Leírás:</label>
                    <input v-model="desc" type="text" class="form-control">
                </div>

                <div class="mb-3 mt-4">
                    <label class="form-label">Elkészítési idő:</label>
                    <input v-model="time" type="number" class="form-control">
                </div>

                <div class="mb-3 mt-4">
                    <label class="form-label">Nehézség</label>
                    <select v-model="diff" class="form-select" aria-label="Default select example">
                        <option value="selectOne">Válassz nehézséget!</option>
                        <option value="Könnyű">Könnyű</option>
                        <option value="Közepes">Közepes</option>
                        <option value="Nehéz">Nehéz</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">URL:</label>
                    <input v-model="img" type="url" class="form-control">
                </div>


                <button type="button" class="btn btn-success" id="liveToastBtn" @click="addRecipe">Recept
                    hozzáadása</button>
            </form>
        </div>
    </section>




    <div class="toast-container position-fixed top-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">

                <strong class="me-auto">Rendszer üzenet</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Bezárás"></button>
            </div>
            <div class="toast-body">
                Sikeres hozzáadás
            </div>
        </div>
    </div>


</template>

<style scoped>
input,
select {
    width: 50%;
}

input,
select {
    margin: 0 auto !important;
}

.toast-body {
    background-color: green;
}

.container {
    margin-top: 100px;
    background:
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../img/addrecipeHatter.jpg");


    border: 2px solid #008000;
    padding: 70px;
    border-radius: 10px;

    background-repeat: repeat;
    background-size: cover;
}

.alert-danger{
    width: 50%;
    margin: 0 auto;
}
</style>