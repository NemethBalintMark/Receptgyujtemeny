<script setup>
import { computed, ref } from 'vue';
import AddRecipe from './components/AddRecipe.vue';
import Filter from './components/Filter.vue';
import Recipes from './components/Recipes.vue';
import { recipesData } from './data/recipesData.js';
import Recipe from './classes/Recipe.js';

const recipes = ref([]);

const page = ref(0);

const nameFilter = ref("");
const diffFilter = ref("minden");
const orderFilter = ref("ido");

const diffs = {"Könnyű": 1, "Közepes": 2, "Nehéz": 3};

const init = () => {
  for (let i = 0; i < recipesData.length; i++) {
    const r = recipesData[i];
    recipes.value.push(new Recipe(r.name, r.time, r.difficulty, r.img));
  }
}

const filter = computed(() => {
  let filteredRecipes = [...recipes.value];

  if (nameFilter.value.trim().length > 0) {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.getName().toLowerCase().includes(nameFilter.value.toLowerCase())
    );
  } else {
    filteredRecipes = filteredRecipes;
  }

  if (diffFilter.value != "minden") {
    filteredRecipes = filteredRecipes.filter((recipe) =>
      recipe.getDifficulty() === diffFilter.value
    );
  } else {
    filteredRecipes = filteredRecipes;
  }

  if (orderFilter.value == "ido") {
    filteredRecipes = filteredRecipes.sort((a, b) => a.getTime() - b.getTime())
  } else if (orderFilter.value == "nehezseg") {
    filteredRecipes = filteredRecipes.sort((a, b) => diffs[a.getDifficulty()] - diffs[b.getDifficulty()])
  } else if (orderFilter.value == "nev") {
    filteredRecipes = filteredRecipes.sort((a, b) => a.getName().localeCompare(b.getName(), "hu"));
  }

  return filteredRecipes;
});

const filterChange = (name, diff, order) => {
  nameFilter.value = name;
  diffFilter.value = diff;
  orderFilter.value = order;
};

init();

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Receptkönyv</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="page = 0">Receptek</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" @click="page = 1">Új Recept</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page">Kedvencek</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  </header>


  <main>
    <Filter v-if="page == 0" @filterChange="filterChange" />
    <Recipes v-if="page == 0" :recipes="filter" />
    <AddRecipe v-else />
  </main>


  <footer></footer>
  
</template>

<style scoped>

</style>