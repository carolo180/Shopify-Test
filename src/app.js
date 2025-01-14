import './styles.scss';
console.log('Gradiweb is online!!!');


document.addEventListener("DOMContentLoaded", () => {
    const bannerTrack = document.getElementById("banner-track");
    const barTrack = document.getElementById("bar-track");
  
    const ensureContinuousScroll = () => {
      const trackWidth = bannerTrack.offsetWidth;
      const parentWidth = bannerTrack.parentElement.offsetWidth;

      const trackBarWidth = barTrack.offsetWidth;
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

  document.addEventListener('DOMContentLoaded', () => {
    // ... (other JavaScript, including menu toggle and blur-on-scroll)
    
    const hamburger = document.getElementById('burguer');
    const menu = document.getElementById('menu');
    
    hamburger.addEventListener('click', () => {
      menu.style.left = menu.style.left === '0px' ? '-100%' : '0';
      hamburger.classList.toggle('is-active'); // Toggle the 'is-active' class
    });
  });

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
