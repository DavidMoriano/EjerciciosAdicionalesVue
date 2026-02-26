<script setup></script>

<template>
    <div class="acercaDe">
        <p>La ciudad es un periódico digital independiente fundado en 2015. Cuenta con un amplio equipo de
            profesionales que te acerca cada día las mejores historias e información de actualidad.</p>

        <h2>Nuestro Equipo Destacado</h2>
        <ul>
            <li><strong>Pedro J. Ramírez</strong> - Presidente</li>
            <li><strong>Cruz Sánchez de Lara</strong> - Vicepresidenta</li>
            <li><strong>Mamen Vázquez</strong> - Directora General</li>
            <li><strong>Álvaro Mazariegos</strong> - Director de Audiencias</li>
            <li><strong>Daniel Muñoz</strong> - Director de Estrategia</li>
            <li><strong>Sergio Sanz</strong> - Director de Tecnología</li>
            <li><strong>Verónica Milo</strong> - (cargo en equipo corporativo)</li>
        </ul>

        <p>El equipo completo supera los 200 profesionales (periodistas, editores, diseñadores, etc.), aunque no se
            publica una lista exhaustiva por motivos de privacidad. Puedes conocer más firmas y autores en las secciones
            del diario.</p>

        <h2>Sede Principal</h2>
        <ul>
            <li><strong>Dirección:</strong> Avenida de Burgos, 16D, 8.º piso, 28036 Madrid, España</li>
        </ul>

        <h2>Datos de Contacto</h2>
        <div class="contacto">
            <ul>
                <li><strong>Email general / lector@s:</strong> lector@elespanol.com</li>
                <li><strong>Suscriptores / Atención al cliente:</strong> suscriptor@elespanol.com</li>
                <li><strong>Accionistas:</strong> accionista@elespanol.com</li>
                <li><strong>Teléfono atención suscriptores (gratuito):</strong> 900 645 646</li>
                <li><strong>WhatsApp (atención / accionistas):</strong> +34 608 823 383 o +34 638 967 455</li>
                <li><strong>Web de contacto:</strong> <a
                        href="https://www.elespanol.com/contactar">https://www.elespanol.com/contactar</a></li>
            </ul>
        </div>

        <p>Para consultas específicas (publicidad, sugerencias, etc.), recomendamos usar el formulario oficial en la
            página de contacto del periódico.</p>
    </div>
</template>

<style scoped>
.acercaDe {
    background-color: beige;
    width: 80%;
    margin: auto;
    padding: 20px;
    text-align: center;
}

h1,
h2 {
    color: blue;
}

ul {
    list-style-type: none;
    padding-left: 20px;
}

li {
    margin-bottom: 8px;
}

.contacto {
    background-color: rgb(253, 253, 209);
    padding: 15px;
    border-radius: 8px;
}
</style>
