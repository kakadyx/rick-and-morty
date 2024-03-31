// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: false,
    devtools: {
        enabled: true,
    },
    modules: ["nuxt-graphql-client", "@nuxtjs/google-fonts"],
    runtimeConfig: {
        public: {
            GQL_HOST: "https://rickandmortyapi.com/graphql",
        },
    },
    css: [
        "~/app/styles/MiniReset.css",
        "~/app/styles/variables.scss",
        "~/app/styles/base.css",
    ],
    googleFonts: {
        families: {
            Roboto: true,
        },
        display: "swap",
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "~/app/styles/global.scss";',
                },
            },
        },
    },
})
