import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import Theory from "./pages/Theory.vue";
import Test from "./pages/Test.vue";
import Result from "./pages/Result.vue";
import Vue from 'vue'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)


export default new VueRouter({
  routes: [
    {
      path: "",
      component: Home
    },
    {
      path: "/theory",
      component: Theory
    },
    {
      path: "/test",
      component: Test
    },
    {
      path: "/result",
      component: Result
    }
  ],
  mode: 'history'
});
