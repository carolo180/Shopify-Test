import './styles.scss';
console.log('Gradiweb is online!!!');

// MARQUEES

document.addEventListener("DOMContentLoaded", () => {
    const bannerTrack = document.getElementById("banner-track");
    const barTrack = document.getElementById("bar-track");
  
    const ensureContinuousScroll = () => {
      const trackWidth = bannerTrack.offsetWidth;
      const parentWidth = bannerTrack.parentElement.offsetWidth;

      const trackBarWidth = barTrack.offsetWidth; //obtiene el ancho total visible
      const parentBarWidth = barTrack.parentElement.offsetWidth;
  
      // Clonamos los elementos hasta que el ancho total del track sea mayor al del contenedor
      while (bannerTrack.scrollWidth < parentWidth * 2) {
        const items = [...bannerTrack.children];
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          bannerTrack.appendChild(clone);
        });
      }

       // Clonamos los elementos hasta que el ancho total del track sea mayor al del contenedor
       while (barTrack.scrollWidth < parentBarWidth * 2) {
        const items = [...barTrack.children];
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          barTrack.appendChild(clone);
        });
      }
    };
  
    // Llenamos el carril para un scroll continuo
    ensureContinuousScroll();
  });

   // MENU RESPONSIVE

  document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.getElementById('burguer');
    const menu = document.getElementById('menu');
    
    hamburger.addEventListener('click', () => {
      menu.style.left = menu.style.left === '0px' ? '-100%' : '0';
      hamburger.classList.toggle('is-active'); // Toggle the 'is-active' class
    });
  });

  // OPACIDAD DEL HEADER

  window.addEventListener('scroll', () => {
    const headerContainer = document.querySelector('.header__container');
    if (window.scrollY > 0) {
      headerContainer.style.backdropFilter = 'blur(7px)'; // Add blur on scroll
      headerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.31)'; // Example semi-transparent background
    } else {
      headerContainer.style.backdropFilter = 'blur(0)'; // Remove blur at the top
      headerContainer.style.backgroundColor = '#1C1C1E'; // Restore transparent background
    }
    });

   // ANIMACION CARDS

    document.addEventListener('DOMContentLoaded', function () {
      const toggleButton = document.querySelector('.featured-products__toggle');
      const productCards = document.querySelectorAll('.product-card');
    
      // Configura el Intersection Observer para el efecto parallax
      const observerOptions = {
        threshold: 0.2, // Inicia la animación cuando el 20% de la tarjeta esté en vista
      };
    
      const observerCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };
    
      const observer = new IntersectionObserver(observerCallback, observerOptions); //detecta si un elemento está visible (total o parcialmente) dentro del área visible
    
      productCards.forEach((card, index) => {
        // Observa solo las tarjetas adicionales (índice >= 4)
        if (index >= 4) {
          observer.observe(card);
          card.style.display = 'none'; // Oculta las tarjetas adicionales inicialmente
        }
      });
    
      // Lógica para alternar entre "Ver más" y "Ver menos"
      toggleButton.addEventListener('click', function () {
        const isExpanded = toggleButton.getAttribute('data-state') === 'more';
    
        if (isExpanded) {
          // Mostrar las tarjetas adicionales con el efecto parallax
          productCards.forEach((card, index) => {
            if (index >= 4) {
              card.style.display = 'block';
              setTimeout(() => {
                card.classList.add('visible');
              }, 50 * (index - 3)); // Escalonar la animación para mejor efecto
            }
          });
          toggleButton.textContent = 'VIEW LESS';
          toggleButton.setAttribute('data-state', 'less');
        } else {
          // Ocultar las tarjetas adicionales
          productCards.forEach((card, index) => {
            if (index >= 4) {
              card.classList.remove('visible');
              setTimeout(() => {
                card.style.display = 'none';
              }, 300); // Retraso para esperar que termine la animación
            }
          });
          toggleButton.textContent = 'VIEW MORE';
          toggleButton.setAttribute('data-state', 'more');
        }
      });
    });

  
    
