<script setup>
import { ref } from 'vue';

const listaArticulos = ref([]);

const funcionGet = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    listaArticulos.value = await response.json();
};

funcionGet();
</script>

<template>
    <div class="articulos">
        <ul>
            <li v-for="articulo in listaArticulos" :key="articulo.id">
                <div class="item-grid">
                    <span class="numero">{{ articulo.id }}</span>
                    <RouterLink :to="`/articulo/${articulo.id}`">
                        {{ articulo.title }}
                    </RouterLink>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.articulos {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    margin: 0.75rem 0;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
}

.item-grid {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
    align-items: baseline;
}

.numero {
    text-align: right;
    font-weight: bold;
    color: #555;
    min-width: 60px;
}

RouterLink {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.2s;
}

RouterLink:hover {
    color: #3498db;
    text-decoration: underline;
}
</style>