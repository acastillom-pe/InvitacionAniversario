import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/500.css'
import '@fontsource/jost/300.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')