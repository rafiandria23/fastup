import { createApp } from 'vue';

// Styles
import './style.css';

// App
import App from './App.vue';

// Router
import router from './router';

createApp(App).use(router).mount('#app');
