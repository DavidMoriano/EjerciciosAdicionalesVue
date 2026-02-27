<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

router.beforeEach((to) => {
    if (to.name !== "Artículos" && edad.value >= 15) {
        if (to.name !== "ArticuloConcreto" && edad.value >= 18) {
            return { name: "ArticuloConcreto" }
        }
        return { name: "Artículos" };
    }
})
let edad = ref(null);
</script>

<template>
    <div class="inicio">
        <div class="card">
            <h1>Bienvenido</h1>

            <form @submit.prevent class="form-edad">
                <div class="input-wrapper">
                    <input id="inputEdad" type="number" v-model.number="edad" />
                    <button type="button" :disabled="edad === null">
                        Continuar
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.inicio {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f0f7ff 0%, #e5eeff 100%);
    padding: 20px;
    box-sizing: border-box;
}

.card {
    background: white;
    width: 100%;
    max-width: 420px;
    padding: 2.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
    text-align: center;
}

h1 {
    margin: 0 0 0.8rem;
    font-size: 2.1rem;
    color: #1e293b;
    font-weight: 600;
}

p {
    margin: 0 0 2rem;
    color: #64748b;
    font-size: 1.05rem;
}

.form-edad {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}

label {
    font-size: 1.05rem;
    font-weight: 500;
    color: #334155;
    text-align: left;
}

.input-wrapper {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

input[type="number"] {
    flex: 1;
    min-width: 120px;
    padding: 14px 16px;
    font-size: 1.15rem;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    outline: none;
    transition: all 0.2s ease;
}

input[type="number"]:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
}

input::placeholder {
    color: #94a3b8;
}

button {
    padding: 14px 28px;
    font-size: 1.05rem;
    font-weight: 500;
    color: white;
    background: #3b82f6;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
}

button:hover:not(:disabled) {
    background: #2563eb;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
}

button:disabled {
    background: #cbd5e1;
    cursor: not-allowed;
    opacity: 0.75;
}
</style>