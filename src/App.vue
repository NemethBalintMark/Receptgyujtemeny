<script setup>
import { computed, ref } from 'vue';
import AddRecipe from './components/AddRecipe.vue';
import Filter from './components/Filter.vue';
import Recipes from './components/Recipes.vue';
import { recipesData } from './data/recipesData.js';
import Recipe from './classes/Recipe.js';

const recipes = ref([]);

const init = () => {
  for (let i = 0; i < recipesData.length; i++) {
    const r = recipesData[i];
    recipes.value.push(new Recipe(r.name, r.time, r.difficulty, r.img));
  }
}

const filter = computed(() => {
  
})

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
          <a class="nav-link active" aria-current="page" href="#">Receptek</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Új Recept</a>
        </li>
         <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Kedvencek</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  </header>


  <main>
    <Filter />
    <Recipes :recipes="recipes" />
    <AddRecipe />
  </main>


  <footer></footer>
  
</template>

<style scoped>

</style>