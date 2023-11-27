// vite.config.js
import handlebars from 'vite-plugin-handlebars';
import {defineConfig} from 'vite';
import {resolve} from 'path';
import {pageData} from "./src/mock/signingData.js";

export default defineConfig({
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions:{
            input:{
                nav:resolve(__dirname,'index.html'),
                login:resolve(__dirname,'src/pages/login/index.html'),
                signIn:resolve(__dirname,'src/pages/signIn/index.html'),
                notFound:resolve(__dirname,'src/pages/NotFound/index.html'),
                serverError:resolve(__dirname,'src/pages/serverError/index.html'),
                profile:resolve(__dirname,'src/pages/profile/index.html'),
            },

        }
    },
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials'),
        context(pagePath) {
            return pageData[pagePath]
        }

    })],
});

