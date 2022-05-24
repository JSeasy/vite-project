import { createApp } from "vue";
import App from "./App.vue";
import "./utils";
import store from "./store/index";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";

const app = createApp(App);

app

  .use(ElementPlus)

  .use(store)

  .mount("#app");