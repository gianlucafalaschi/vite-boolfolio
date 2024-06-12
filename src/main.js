import { createApp } from 'vue'
import App from './App.vue'
//questa e' sintassi da prendere dalle slide 68
import { router } from './router';  // importo il router.js

createApp(App).use(router).mount('#app') 

