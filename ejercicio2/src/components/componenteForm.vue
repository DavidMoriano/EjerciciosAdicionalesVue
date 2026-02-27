<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const articuloParaBuscar = ref(null);
const router = useRouter();

const buscarArticulo = (event) => {
    event.preventDefault();
    router.push({
        name: "ArticuloConcreto",
        params: {
            id: articuloParaBuscar.value
        }
    });
}
</script>

<template>
    <div class="formulario">
        <form>
            <label for="">Buscar Artículo</label>
            <input type="number" v-model.number="articuloParaBuscar" />
            <button type="submit" :disabled="articuloParaBuscar === null" @click="buscarArticulo">
                Iniciar
            </button>
        </form>
    </div>
</template>

<style scoped>
.formulario {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

form {
    display: flex;
    gap: 12px;
    align-items: center;
    background: #f8f9fa;
    padding: 1.5rem 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

input[type="number"] {
    width: 140px;
    padding: 12px 16px;
    font-size: 1.1rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
}

input[type="number"]:focus {
    border-color: #3b82f6;
}

input[type="number"]::placeholder {
    color: #aaa;
}

button {
    padding: 12px 24px;
    font-size: 1.1rem;
    font-weight: 500;
    color: white;
    background: #3b82f6;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

button:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
}

button:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    opacity: 0.7;
}
</style>