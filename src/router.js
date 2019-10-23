import Vue from "vue";
import Router from "vue-router";
import Main from "./components/main";
import Login from "./components/login";
import BoardUnsolved from "./components/board/board";
import BoardSolved from "./components/board/board-solved";
import BoardPopular from "./components/board/board-hot";

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
        },
        {
            path:"/board-unsolved",
            name:"board-unsolved",
            component:BoardUnsolved
        },
        {
            path:"/board-solved",
            name:"board-solved",
            component:BoardSolved
        },
        {
            path:"/board-popular",
            name:"board-popular",
            component:BoardPopular
        }
    ]
})