import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from "pinia"
import router from "@/router/index.js"

init().then(null)

async function init() {
    const Vue = createApp(App)

    await fetch(import.meta.env.BASE_URL + 'palette.json')
        .then((response) => response.json())
        .then((palette) => {
            window.palette = palette
            Vue.config.globalProperties.$palette = palette
        })
    await fetch(import.meta.env.BASE_URL + 'images.json')
        .then((response) => response.json())
        .then((images) => {
            window.images = images
            Vue.config.globalProperties.$images = images
        })


    const vuetify = createVuetify({
        defaults: {
            VSheet: {
                color: 'transparent'
            },
            VChip: {
                variant: 'text'
            }
        },
        components,
        directives
    })

    library.add(fas)
    const pinia = createPinia()


    Vue.use(router)
    Vue.use(vuetify)
    Vue.use(pinia)
    Vue.component('v-icon', FontAwesomeIcon)


    Vue.mount('#app')
}



