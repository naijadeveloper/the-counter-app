import { createApp } from "vue";
import store from "./store/store"
import router from "./router/routing";
import App from "./App";
import "./css/style.css";

const app = createApp(App);
app.use(store)
app.use(router);
app.mount("#app");