import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/brazil', name: 'brazil', component: () => import('@/views/Brazil.vue')},// lazy load
    {path: '/hawaii', name: 'hawaii', component: () => import('@/views/Hawaii.vue')},// lazy load
    {path: '/jamaica', name: 'jamaica', component: () => import('@/views/Jamaika.vue')},// lazy load
    {path: '/panama', name: 'panama', component: () => import('@/views/Panama.vue')},// lazy load
    {path: '/destination/:id/:slug', name: 'destination.show', component: () => import('@/views/DestinationShow.vue')},// lazy load
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // linkActiveClass: 'vue-school-active-link' // add custom design to active link element
})

export default router