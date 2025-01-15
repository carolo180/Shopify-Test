# Shopify Simulator Test Documentación**

Este proyecto es una simulación de una tienda Shopify, construido con Liquid, JavaScript Vanilla, y SASS, utilizando la metodología BEM (Block, Element, Modifier) para mantener una estructura y estilo bien organizados.

No se utilizaron otras CDN ni se instalaron librerías externas adicionales, enfocándonos en una solución ligera y eficiente.

El objetivo del proyecto es replicar una tienda Shopify básica utilizando datos estáticos simulados para productos y colecciones. Este proyecto incluye secciones reutilizables y snippets dinámicos.

---

## **Estructura del Proyecto**


/simulator
├── /config
│   ├── settings_schema.json      # Define configuraciones para las secciones.
│   ├── settings_data.json        # Almacena datos dinámicos para renderizado.
├── /data
│   ├── products.json             # Datos simulados de productos.
│   ├── collections.json          # Datos simulados de colecciones.
├── /public
│   ├── assets                    # Archivos estáticos (imágenes, fuentes, etc.).
│   │   ├── fonts                 # Fuentes usadas en el proyecto.
│   │   ├── images                # Imágenes para productos y banners.
│   ├── styles.css                # Archivo CSS compilado.
│   ├── main.js                   # Archivo JavaScript compilado.
├── /sections
│   ├── banner.liquid             # Sección para banners principales.
│   ├── carrusel-products.liquid # Sección tarjetas productos.
|   ├── featured-collections.liquid # Sección tarjetas collections (Sin finalizar).
│   ├── featured-products.liquid  # Productos destacados.
│   ├── footer.liquid             # Pie de página.
│   ├── header.liquid             # Encabezado principal.
├── /snippets
│   ├── carrusel-card.liquid      # Snippet reutilizable para tarjetas de carrusel.
│   ├── collection-card.liquid    # Tarjetas de colecciones.
│   ├── header-bar.liquid         # Barra de navegación principal.
│   ├── hero-banner.liquid        # Banner principal destacado.
│   ├── product-card.liquid       # Snippet para mostrar productos.
│   ├── top-bar.liquid            # Barra superior.
├── /templates
│   ├── index.liquid              # Archivo principal de plantilla.
├── /src
│   ├── app.js                    # Lógica principal en JavaScript.
│   ├── styles.scss               # Estilos base en SASS.
├── package.json                  # Información sobre las dependencias.
├── webpack.config.js             # Configuración de Webpack.
├── server.js                     # Servidor Node.js para manejar la simulación.

## **Configuración de Webpack**

El proyecto utiliza Webpack para manejar la compilación de archivos SASS y JavaScript. A continuación, se muestra la configuración utilizada:

### **Plugins Utilizados**
MiniCssExtractPlugin:
Extrae el CSS generado desde SASS en un archivo separado para mejorar la gestión de estilos.

TerserPlugin:
Minifica el código JavaScript eliminando elementos innecesarios como console.log.

CssMinimizerPlugin:
Minifica el CSS para optimizar el rendimiento del archivo.

### **Características del Proyecto**

Diseño modular:
Cada sección está separada en archivos Liquid específicos para facilitar el mantenimiento.

Metodología BEM:
Los estilos están organizados siguiendo bloques, elementos y modificadores.

SASS y Webpack:
Compilación de estilos con optimización de archivos para producción.

Datos simulados:
Los datos de productos y colecciones son cargados desde archivos JSON.



### **Clonar el repositorio:**
git clone https://github.com/carolo180/Shopify-Test.git

### **Installar Dependencias**

```bash
npm install
```

### **Correr el Servidor**

```bash
npm start
```

### **Construir estiloss and Scripts**

```bash
npm run build
```

---

### **Testing the Application**

Visit `http://localhost:3000` in your browser to view the simulator in action.

---

