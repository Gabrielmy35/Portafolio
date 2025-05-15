// Animación al hacer scroll
window.addEventListener('scroll', function() {
    const elementos = document.querySelectorAll('.seccion-destacada, .tarjeta-servicio');
    elementos.forEach(elemento => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaVentana = window.innerHeight;
        
        if(posicion < alturaVentana * 0.85) {
            elemento.style.opacity = '1';
            elemento.style.transform = 'translateY(0)';
        }
    });
});

// Efecto hover para proyectos
document.querySelectorAll('.proyecto').forEach(proyecto => {
    proyecto.addEventListener('mouseover', () => {
        proyecto.querySelector('img').style.transform = 'scale(1.1)';
    });
    
    proyecto.addEventListener('mouseout', () => {
        proyecto.querySelector('img').style.transform = 'scale(1)';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});