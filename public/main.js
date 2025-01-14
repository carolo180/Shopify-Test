(()=>{"use strict";var __webpack_modules__={"./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.scss?")},"./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\nconsole.log('Gradiweb is online!!!');\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const bannerTrack = document.getElementById(\"banner-track\");\n    const barTrack = document.getElementById(\"bar-track\");\n  \n    const ensureContinuousScroll = () => {\n      const trackWidth = bannerTrack.offsetWidth;\n      const parentWidth = bannerTrack.parentElement.offsetWidth;\n\n      const trackBarWidth = barTrack.offsetWidth;\n      const parentBarWidth = barTrack.parentElement.offsetWidth;\n  \n      // Clonamos los elementos hasta que el ancho total del track sea mayor al del contenedor\n      while (bannerTrack.scrollWidth < parentWidth * 2) {\n        const items = [...bannerTrack.children];\n        items.forEach((item) => {\n          const clone = item.cloneNode(true);\n          bannerTrack.appendChild(clone);\n        });\n      }\n\n       // Clonamos los elementos hasta que el ancho total del track sea mayor al del contenedor\n       while (barTrack.scrollWidth < parentBarWidth * 2) {\n        const items = [...barTrack.children];\n        items.forEach((item) => {\n          const clone = item.cloneNode(true);\n          barTrack.appendChild(clone);\n        });\n      }\n    };\n  \n    // Llenamos el carril para un scroll continuo\n    ensureContinuousScroll();\n  });\n\n  document.addEventListener('DOMContentLoaded', () => {\n    // ... (other JavaScript, including menu toggle and blur-on-scroll)\n    \n    const hamburger = document.getElementById('burguer');\n    const menu = document.getElementById('menu');\n    \n    hamburger.addEventListener('click', () => {\n      menu.style.left = menu.style.left === '0px' ? '-100%' : '0';\n      hamburger.classList.toggle('is-active'); // Toggle the 'is-active' class\n    });\n  });\n\n  window.addEventListener('scroll', () => {\n    const headerContainer = document.querySelector('.header__container');\n    if (window.scrollY > 0) {\n      headerContainer.style.backdropFilter = 'blur(7px)'; // Add blur on scroll\n      headerContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.31)'; // Example semi-transparent background\n    } else {\n      headerContainer.style.backdropFilter = 'blur(0)'; // Remove blur at the top\n      headerContainer.style.backgroundColor = '#1C1C1E'; // Restore transparent background\n    }\n    });\n\n    document.addEventListener('DOMContentLoaded', function () {\n      const toggleButton = document.querySelector('.featured-products__toggle');\n      const productCards = document.querySelectorAll('.product-card');\n    \n      // Configura el Intersection Observer para el efecto parallax\n      const observerOptions = {\n        threshold: 0.2, // Inicia la animación cuando el 20% de la tarjeta esté en vista\n      };\n    \n      const observerCallback = (entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add('visible');\n          }\n        });\n      };\n    \n      const observer = new IntersectionObserver(observerCallback, observerOptions);\n    \n      productCards.forEach((card, index) => {\n        // Observa solo las tarjetas adicionales (índice >= 4)\n        if (index >= 4) {\n          observer.observe(card);\n          card.style.display = 'none'; // Oculta las tarjetas adicionales inicialmente\n        }\n      });\n    \n      // Lógica para alternar entre \"Ver más\" y \"Ver menos\"\n      toggleButton.addEventListener('click', function () {\n        const isExpanded = toggleButton.getAttribute('data-state') === 'more';\n    \n        if (isExpanded) {\n          // Mostrar las tarjetas adicionales con el efecto parallax\n          productCards.forEach((card, index) => {\n            if (index >= 4) {\n              card.style.display = 'block';\n              setTimeout(() => {\n                card.classList.add('visible');\n              }, 50 * (index - 3)); // Escalonar la animación para mejor efecto\n            }\n          });\n          toggleButton.textContent = 'VIEW LESS';\n          toggleButton.setAttribute('data-state', 'less');\n        } else {\n          // Ocultar las tarjetas adicionales\n          productCards.forEach((card, index) => {\n            if (index >= 4) {\n              card.classList.remove('visible');\n              setTimeout(() => {\n                card.style.display = 'none';\n              }, 300); // Retraso para esperar que termine la animación\n            }\n          });\n          toggleButton.textContent = 'VIEW MORE';\n          toggleButton.setAttribute('data-state', 'more');\n        }\n      });\n    });\n    \n    \n    \n    \n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/app.js")})();