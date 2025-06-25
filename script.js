document.getElementById('btn-mensaje').addEventListener('click', function() {
    const mensajes = [
        "Eres la mejor amiga que alguien podría desear. ¡Te amo mucho! 💖",
        "Te amo ❤️‍",
        "Te quiero 💝",
        "Mi Gatita🐈",
        "Gracias por llegar a mi vida 🥰",
        "Te ama tu Vides 🤍"
    ];
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
    const mensajeEspecial = document.getElementById('mensaje-especial');
    
    mensajeEspecial.innerHTML = `<p>${mensajeAleatorio}</p>`;
    mensajeEspecial.classList.remove('hidden');
    
    // Efecto de confeti (opcional)
    for (let i = 0; i < 100; i++) {
        crearConfeti();
    }
});

function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.style.position = 'fixed';
    confeti.style.width = '10px';
    confeti.style.height = '10px';
    confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confeti.style.left = `${Math.random() * 100}vw`;
    confeti.style.top = '-10px';
    confeti.style.borderRadius = '50%';
    document.body.appendChild(confeti);

    const esMovil = window.innerWidth <= 768;
    const cantidad = esMovil ? 50 : 100; 
    const animacion = confeti.animate([
        { top: '-10px', transform: 'rotate(0deg)' },
        { top: '100vh', transform: 'rotate(360deg)' }
    ], {
        duration: Math.random() * 3000 + 2000,
        easing: 'cubic-bezier(0.1, 0.2, 0.3, 1)'
    });
    
    animacion.onfinish = () => confeti.remove();
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioFondo');
    const btnBocina = document.getElementById('btnBocina');
    audio.volume = 0.3; // Volumen al 30%

    // Intenta reproducir automáticamente (puede fallar en móviles)
    audio.play()
        .then(() => {
            btnBocina.textContent = '🔊'; // Icono de bocina activa
        })
        .catch(error => {
            btnBocina.style.display = 'block'; // Muestra el botón si falla
        });

    // Control manual con el botón
    btnBocina.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            btnBocina.textContent = '🔊';
        } else {
            audio.pause();
            btnBocina.textContent = '🔇';
        }
    });
});