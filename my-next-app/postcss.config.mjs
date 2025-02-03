/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.ts" }, // Asegúrate de que la ruta es correcta
    autoprefixer: {}, // A menudo se incluye con Tailwind para asegurar la compatibilidad entre navegadores
  },
};

export default config;
