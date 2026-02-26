<script setup></script>

<template>
    <div>
        <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/articulos">Artículos</RouterLink></li>
            <li><RouterLink to="/acercaDe">Acerca de</RouterLink></li>
        </ul>
    </div>
</template>

<style scoped>
    ul {
        display: flex;
        padding: 20px;
        justify-content: space-around;
        background-color: lightblue;
    }
    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: black;
    }

</style>
