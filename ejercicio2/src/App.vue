<script setup>
import ComponenteCabecera from './components/componenteCabecera.vue';
import ComponenteMenu from './components/componenteMenu.vue';
import "./assets/main.css";
import ComponenteForm from './components/componenteForm.vue';

let buscarArticulo = (idArticulo) => {
  idArticulo;
}

</script>

<template>
  <ComponenteCabecera> </ComponenteCabecera>
  <ComponenteMenu></ComponenteMenu>
  <ComponenteForm @buscar-articulo="buscarArticulo"></ComponenteForm>
  <RouterView />
</template>

<style scoped>
</style>
