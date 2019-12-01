import { css, defaultTheme } from "@transclusion/css";
import Vue from "vue";
import app from "./app.vue";

const styleEl = document.createElement("style");
styleEl.innerHTML = css(defaultTheme);
document.body.appendChild(styleEl);

new Vue({
  render: h => h(app)
}).$mount("#app");
