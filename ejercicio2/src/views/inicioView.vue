<script setup>
import { ref } from 'vue';

    let edad = ref(null);
</script>

<template>
    <div class="inicio">
        <p>Bienvenido</p>
        <form action="#">
            <label for="inputEdad">Introduzca su edad</label>
            <input type="number" v-model=edad name="inputEdad" id="inputEdad">
        </form>
    </div>
</template>

<style scoped>
    .inicio {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20vh;
        background-color: aliceblue;
    }
</style>
