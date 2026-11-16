<script setup>


</script>

<template>
    <section>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Keress receptet..." aria-label="Search" />
            

            <select class="form-select" aria-label="Default select example">
                <option selected>Minden nehézség</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select class="form-select" aria-label="Default select example">
                <option selected>Elkészítési idő szerint</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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