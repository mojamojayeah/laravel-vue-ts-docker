import { createApp } from "vue";
import App from "./components/App.vue";

const app = createApp({});
app.component("app-vue", App);
app.mount("#app");
