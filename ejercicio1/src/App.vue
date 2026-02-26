<script setup>
import ComponenteCabecera from './components/componenteCabecera.vue';
import ComponenteMenu from './components/componenteMenu.vue';
import "./assets/main.css";

</script>

<template>
  <ComponenteCabecera> </ComponenteCabecera>
  <ComponenteMenu></ComponenteMenu>
  <RouterView />
</template>

<style scoped>
</style>
