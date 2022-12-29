import "./bootstrap";
import "vuetify/styles";
// import "vuetify/lib/styles/main.sass";
import { createApp } from "vue";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";

import router from "./route.js";
import App from "./pages/App.vue";

const vuetify = createVuetify();
const app = createApp(App);

app.use(router);
app.use(vuetify);	
app.mount("#app");