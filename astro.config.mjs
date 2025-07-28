import { defineConfig } from 'astro/config';

export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // Solo para archivos individuales, no para main.scss
                    additionalData: (content, filename) => {
                        // No agregar imports automáticos al archivo main.scss principal
                        if (filename.includes('main.scss')) {
                            return content;
                        }
                        // Para otros archivos SCSS, agregar imports necesarios
                        return `
                            @use "sass:map";
                            @use "sass:math";
                            @import "src/styles/abstracts/_colors.scss";
                            @import "src/styles/abstracts/_mixins.scss";
                            @import "src/styles/abstracts/_tokens.scss";
                            ${content}
                        `;
                    },
                },
            },
        },
    },
});
