<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
let route = useRoute();


const id = route.params.id
let articulo = ref(null);

let funcionArticuloConcreto = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id);
    articulo.value = await response.json();
}

funcionArticuloConcreto();

</script>

<template>
    <div>
        <h2>Id artículo : {{ id }}</h2>
        <p class="articuloElegido">{{ articulo.title }}</p>
    </div>
</template>

<style scoped>
.articuloElegido, h2 {
    text-align: center;
    background-color: salmon;
    width: 300px;
    margin: auto;
}
</style>
