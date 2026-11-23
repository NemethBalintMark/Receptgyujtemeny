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

const diffs = { "Könnyű": 1, "Közepes": 2, "Nehéz": 3 };

const init = () => {
    const savedRecipes = localStorage.getItem("reciepes");

    if (savedRecipes === null) {
        recipes.value = recipesData.map((r, index) =>
            new Recipe(
                index,
                r.name,
                r.description,
                r.time,
                r.difficulty,
                r.img
            )
        );
    } else {
        recipes.value = JSON.parse(savedRecipes).map(r =>
            new Recipe(
                r.id,
                r.name,
                r.desc,
                r.time,
                r.difficulty,
                r.image
            )
        );
    }

    localStorage.setItem("reciepes", JSON.stringify(recipes.value));
};

const filter = computed(() => {
  let filteredRecipes = [...recipes.value];
  console.log(filteredRecipes);

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

const addRecipe = (recipe) => {
  const newId = recipes.value.length > 0
    ? Math.max(...recipes.value.map(r => r.getId())) + 1
    : 0;

  recipes.value.push(new Recipe(
    newId,
    recipe.getName(),
    recipe.getDesc(),
    recipe.getTime(),
    recipe.getDifficulty(),
    recipe.getImage()
  ));

  localStorage.setItem("reciepes", JSON.stringify(recipes.value));
}

const deleteReciepe = (id) => {
    for (let i = 0; i < recipes.value.length; i++) {
      if (recipes.value[i].getId() == id) {
        recipes.value.splice(i, 1);
      }
    }

    localStorage.setItem("reciepes", JSON.stringify(recipes.value));
}

init();

</script>

<template>
  <header>
    <div>
      <div class="container-fluid menu p-3">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Receptkönyv</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" @click="page = 0">Receptek</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page" @click="page = 1">Új Recept</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page">Kedvencek</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>


      </div>
    </div>
  </header>


  <main>
    <Filter v-if="page == 0" @filterChange="filterChange" />
    <Recipes v-if="page == 0" :recipes="filter" @deleteReciepe="deleteReciepe" />
    <AddRecipe v-else @addRecipe="addRecipe" />
  </main>


  <footer></footer>

</template>

<style scoped>
.menu, nav {
  background-color: #584B42 !important;
  color:#fff !important;
}


</style>
