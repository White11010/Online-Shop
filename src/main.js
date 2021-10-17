import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/fonts/helveticaneuecyr-medium.ttf";
// import "./assets/styles/style.scss";

createApp(App).use(store).use(router).mount("#app");
