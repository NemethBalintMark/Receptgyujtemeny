<script setup>
import { ref } from 'vue';

const emit = defineEmits(["filterChange"]);

const searchName = ref("");
const difficultyFilter = ref("minden");
const order = ref("ido");

const filterChange = () => {
    emit("filterChange", searchName.value, difficultyFilter.value, order.value);
}

</script>

<template>
    <section class="mt-3">
        <form class="d-flex keresesek" role="search">
            <input v-model="searchName" class="form-control me-2" type="search" placeholder="Keress receptet..." aria-label="Search" @keyup="filterChange" />
            

            <select v-model="difficultyFilter" class="form-select me-3 filterselect" aria-label="Default select example " @change="filterChange">
                <option value="minden">Minden nehézség</option>
                <option value="Könnyű">könnyű</option>
                <option value="Közepes">közepes</option>
                <option value="Nehéz">nehéz</option>
            </select>

            <select v-model="order" class="form-select filterselect" aria-label="Default select example" @change="filterChange">
                <option value="ido">Elkészítési idő szerint</option>
                <option value="nehezseg">Nehézség szerint</option>
                <option value="nev">Név szerint</option>
                
            </select>
        </form>


    </section>
</template>

<style scoped>
form {
    margin-left: 10px;
}

select{
    width: 40%;
}
</style>