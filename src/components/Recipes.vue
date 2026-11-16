<script setup>

const props = defineProps({
    recipes: Array
})

</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="card mt-3 me-3" style="width: 18rem;">
                    <div class="kep">
                        <img src="../img/Boreks_recipe.jpg" class="card-img-top w-100" alt="...">
                    </div>

                    <div class="card-body">
                        <h5 class="card-title">Recept név</h5>
                        <p class="card-text">elkészítrési idő.</p>
                        <p class="badge text-bg-success">asd</p>
                        <p><a href="#" class="btn btn-primary">Részletek</a></p>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section class="nincs">
        <p>Nincs találat!</p>
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

.card:hover{
  background-color: #eeecec;
  border: 5px solid #008000;
 
}

.nincs{
    text-align: center;
    font-size: 50px;
    color: #ff0000;
    margin-top: 30px;
}

</style>