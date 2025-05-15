// Animaciones al hacer scroll
window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.tarjeta-servicio, .proyecto, .grupo-habilidad, .item-timeline');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        
        if(posicion < alturaVentana * 0.85) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación formulario
const formulario = document.querySelector('.formulario-contacto');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    formulario.reset();
    alert('¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.');
});