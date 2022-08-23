import Vue from 'vue'
import Router from 'vue-router'
import axios from "axios";
import Index from "../components/Index";
import User from "../components/User";
import UserAdd from "../components/UserAdd";
import UserEdit from "../components/UserEdit";

Vue.prototype.$http=axios   //修改内部的$http为axios
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/index'},
    {path: '/index', component: Index},
    {
        path: '/user', component: User,
        children: [
            {path: 'add', component: UserAdd},
            {path: 'edit/:id', component: UserEdit}
        ]
    },
  ]
})
