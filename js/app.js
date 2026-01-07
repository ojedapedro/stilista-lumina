// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('bookingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita recargar la página

        // 1. Capturar datos del formulario
        const nombre = document.getElementById('nombre').value;
        const servicio = document.getElementById('servicio').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        // 2. Configuración del número de teléfono
        // IMPORTANTE: Cambia este número por el de la estética
        const telefonoEstetica = "584144415403"; 

        // 3. Validar datos básicos (Opcional pero recomendado)
        if(!nombre || !fecha || !hora) {
            alert("Por favor completa todos los campos requeridos");
            return;
        }

        // 4. Crear el mensaje codificado para URL
        const mensaje = `Hola Lumina Estética ✨, deseo agendar una cita.%0A%0A` +
                        `👤 *Nombre:* ${nombre}%0A` +
                        `💅 *Servicio:* ${servicio}%0A` +
                        `📅 *Fecha:* ${fecha}%0A` +
                        `⏰ *Hora:* ${hora}%0A%0A` +
                        `Espero su confirmación. ¡Gracias!`;

        // 5. Generar URL y abrir WhatsApp
        const url = `https://wa.me/${telefonoEstetica}?text=${mensaje}`;
        window.open(url, '_blank');
    });
});
