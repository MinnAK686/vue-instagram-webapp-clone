import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/scss/main.scss";

let pinia = createPinia();
loadFonts();

createApp(App).use(router).use(pinia).use(vuetify).mount("#app");
