import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import mainInterface from '@/views/mainInterface'
import Home from '@/views/home/index.vue';
import Authority from '@/views/authority/index.vue'
import Resource from '@/views/resource'
import source from '@/views/source/index.vue'

// import {
//   component
// } from 'vue/types/umd';

Vue.use(VueRouter)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/',
    name: 'mainInterface',
    component: mainInterface,
    redirect: '/login',
    children: [{
        path: '/home',
        name: 'home',
        component: Home,
        mata: {
            title: '首页'
        }
    }, {
        path: '/authority',
        name: 'authority',
        component: Authority,
        meta: {
            title: '会员管理'
        }
    }, {
        path: '/resource',
        component: Resource,
        mata: {
            title: '动资源管理'
        }
    }, {
        path: '/source',
        component: source,
        mata: {
            title: '资源来源管理'
        }
    }]

}]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router