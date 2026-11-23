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
        recipes.value = recipesData.map(r =>
            new Recipe(r.name, r.description, r.time, r.difficulty, r.img)
        );
    } else {
        recipes.value = JSON.parse(savedRecipes).map(r =>
            new Recipe(r.name, r.desc, r.time, r.difficulty, r.image)
        );
    }

    localStorage.setItem("reciepes", JSON.stringify(recipes.value));
}

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
  recipes.value.push(recipe);
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
                  <a class="nav-link active text-white me-3" aria-current="page" @click="page = 0">Receptek</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white me-3" aria-current="page" @click="page = 1">Új Recept</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active text-white" aria-current="page">Kedvencek</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>


      </div>

      <div class="hatter">
          <h1 class="text-center">Receptgyűjtemény</h1>
          <div class="recipe-slider">
        <div v-for="(recipe, index) in recipesData.slice(0, 3)" :key="index" class="slider-card"
          :class="'card-' + index" :style="{ backgroundImage: `url(${recipe.img})` }">
          <span class="featured">Kiemelt recept</span>

          <div class="card-content">
            <h5>{{ recipe.name }}</h5>
          </div>
        </div>
      </div>

      </div>

      
      
    </div>
  </header>


  <main>
    <Filter v-if="page == 0" @filterChange="filterChange" />
    <Recipes v-if="page == 0" :recipes="filter" />
    <AddRecipe v-else @addRecipe="addRecipe" />
  </main>


  <footer class="text-center mt-5 text-dark">
    <p>Minden jog fenntartva!</p>
  </footer>

</template>

<style scoped>
.menu, nav {
  background-color: #584B42 !important;
  color:#fff !important;
}

.hatter {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(34, 78, 14, 0.25)),
    url("./img/hatter.webp");

  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  height: 400px;
  padding-top: 200px;
  margin-bottom: 100px;
 
}

h1{
  padding-bottom: 100px !important;
}


.recipe-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0;
  position: relative;
  z-index: 5;
  margin-top: -55px;
  padding-bottom: 30px;
}

.slider-card {
  width: 260px;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}

.slider-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    transparent,
    rgba(0, 0, 0, 0.65)
  );
}

.card-0 {
  border-radius: 3px;
  transform: translateY(-5px);
}

.card-1 {
  height: 175px;
  z-index: 2;
  border-radius: 3px;
}

.card-2 {
  border-radius: 3px;
  transform: translateY(-5px);
}

.featured {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #36b879;
  color: white;
  font-size: 10px;
  padding: 4px 10px;
  border-radius: 3px;
  white-space: nowrap;
  z-index: 2;
}

.card-content {
  position: relative;
  z-index: 2;
  padding: 12px;
  width: 100%;
}

.card-content h5 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  text-shadow: 1px 1px 3px black;
}


@media (max-width: 768px) {
  .slider-card{
    display: none;
  }
}


</style>
