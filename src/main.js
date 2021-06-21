import { createApp } from 'vue'
import BaseButton from './components/reusable/BaseButton.vue'
import App from './App.vue'
import router from "./router.js";
const app = createApp(App)
app.component("base-button", BaseButton);
app.use(router);
app.mount("#app");
