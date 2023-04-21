/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";
import router from "./components/router/route";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";

// Plugins
import { registerPlugins } from "@/plugins";

const pinia = createPinia();

// pinia.store.value = useUserStore();

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(pinia);

app.mount("#app");
