<script setup>


</script>

<template>
    <section class="mt-3">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Keress receptet..." aria-label="Search" />
            

            <select class="form-select me-3" aria-label="Default select example ">
                <option selected>Minden nehézség</option>
                <option value="1">könnyű</option>
                <option value="2">közepes</option>
                <option value="3">nehéz</option>
            </select>

            <select class="form-select" aria-label="Default select example">
                <option selected>Elkészítési idő szerint</option>
                <option value="1">Nehézség szerint</option>
                <option value="2">Név szerint</option>
                
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