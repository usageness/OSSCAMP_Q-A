import Vue from "vue";
import Router from "vue-router";
import Main from "./components/main";
import Login from "./components/login";

Vue.use(Router);
export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"main",
            component:Main
        },
        {
            path:"/login",
            name:"login",
            component:Login
        }
    ]
})