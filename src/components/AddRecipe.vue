<script setup>


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
                    <label class="form-label">elkészítési idő:</label>
                    <input type="text" class="form-control">
                </div>

                <div class="mb-3 mt-4">
                    <label class="form-label">Nehézség</label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Könnyű</option>
                        <option value="2">Közepes</option>
                        <option value="3">Nehéz</option>
                    </select>
                </div>

                <button type="button" class="btn btn-success">recept hozzáadása</button>
            </form>
        </div>
    </section>

</template>

<style scoped>
input, select {
    width: 50%;
}

input, select {
    margin: 0 auto !important;
}
</style>