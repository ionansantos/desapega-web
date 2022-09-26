import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

createApp(App).use( mdiVue, { icons: mdijs }).use(store).use(router).mount('#app')
