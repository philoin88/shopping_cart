import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Basket from "@/components/Basket";
import BasketCheckout from "@/components/BasketCheckout";
import MyAccount from "@/components/MyAccount";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/basket/checkout",
      name: "BasketCheckout",
      component: BasketCheckout
    },
    {
      path: "/basket",
      name: "Basket",
      component: Basket
    },
    {
      path: "/myaccount",
      name: "MyAccount",
      component: MyAccount
    }
  ]
});
