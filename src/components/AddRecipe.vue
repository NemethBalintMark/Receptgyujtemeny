<script setup>
import { ref } from 'vue';

const name = ref("");
const time = ref();
const diff = ref("selectOne");
const img = ref("");

</script>

<template>
    <section>
        <div class="container">
            <form class="text-center">
                <div class="mb-3">
                    <label class="form-label">Név:</label>
                    <input type="text" class="form-control">
                </div>

                <div class="mb-3 mt-4">
                    <label class="form-label">Elkészítési idő:</label>
                    <input type="number" class="form-control">
                </div>

                <div class="mb-3 mt-4">
                    <label class="form-label">Nehézség</label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="selectOne">Válassz nehézséget!</option>
                        <option value="Könnyű">Könnyű</option>
                        <option value="Közepes">Közepes</option>
                        <option value="Nehéz">Nehéz</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label class="form-label">URL:</label>
                    <input type="url" class="form-control">
                </div>


                <button type="button" class="btn btn-success" id="liveToastBtn">Recept hozzáadása</button>
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

.toast-body{
    background-color: green;
}

.container{
    margin-top: 100px;
    background-color: #fff;
    color:#000;
    border: 5px solid #008000;
    padding: 50px;
    border-radius: 10px;
}


</style>