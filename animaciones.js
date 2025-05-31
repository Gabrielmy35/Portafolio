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

// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguesa = document.getElementById('menuHamburguesa');
    const navPrincipal = document.getElementById('navPrincipal');

    // Toggle del menú
    menuHamburguesa.addEventListener('click', function(e) {
        e.stopPropagation();
        navPrincipal.classList.toggle('active');
    });

    // Cerrar menú al hacer click en enlace
    document.querySelectorAll('.nav-principal a').forEach(link => {
        link.addEventListener('click', () => {
            navPrincipal.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!navPrincipal.contains(e.target) && !menuHamburguesa.contains(e.target)) {
            navPrincipal.classList.remove('active');
        }
    });

    // Cerrar menú al redimensionar
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navPrincipal.classList.remove('active');
        }
    });
});

// Animación formulario
const formulario = document.querySelector('.formulario-contacto');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    formulario.reset();
    alert('¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo.');
});
// Scrollspy: resaltar ítem activo del menú según la sección visible
window.addEventListener('scroll', () => {
    const secciones = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop - 80;
        const seccionHeight = seccion.offsetHeight;
        const seccionId = seccion.getAttribute('id');

        if (scrollY >= seccionTop && scrollY < seccionTop + seccionHeight || 
    (seccionId === 'contacto' && (window.innerHeight + scrollY) >= document.body.offsetHeight)) {
            document.querySelectorAll('.nav-principal a').forEach(link => {
                link.classList.remove('activo');
                if (link.getAttribute('href') === `#${seccionId}`) {
                    link.classList.add('activo');
                }
            });
        }
    });
});
