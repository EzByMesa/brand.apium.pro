import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { createPinia } from "pinia";
import router from "@/router/index.js";
import { themes } from "@/plugins/themes.js"


const vuetify = createVuetify({
    theme: {
        themes: themes
    },
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

const Vue = createApp(App)
Vue.use(router)
Vue.use(vuetify)
Vue.use(pinia)
Vue.component('v-icon', FontAwesomeIcon)
Vue.mount('#app')
