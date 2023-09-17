import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/framework.css";
import "normalize.css";
import { createI18n } from "vue-i18n"; // Import createI18n for Vue 3
import enLocale from "@/Js/en.js";
import frLocale from "@/Js/fr.js";

const messages = {
  en: enLocale,
  fr: frLocale,
};

const i18n = createI18n({
  // Use createI18n to create the i18n instance
  locale: "en",
  fallbackLocale: "en",
  messages,
});

import "./scss/main.scss";
import "./scss/all.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const app = createApp(App);

app.mixin({
  created() {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      // More AOS options...
    });
  },
});

app.use(router);
app.use(store);
app.use(i18n);

app.mount("#app");
