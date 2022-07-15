import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import './utils/index.ts';
import store from './store';
import 'element-plus/dist/index.css';
// import "element-plus/theme-chalk/dark/css-vars.css";
import { router } from './router';

const app = createApp(App);

app.use(router).use(ElementPlus).use(store).mount('#app');
