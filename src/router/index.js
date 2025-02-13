import {createRouter, createWebHistory} from "vue-router";
//import routesAuth from './authRouter.js'
import Register from "@/views/auth/Register.vue";

var allRoutes = []

//const routes = allRoutes.concat(routesAuth)

const routes = [
    {
        path: '/',
        component: Register // Página principal
    },
    {
        path: '/register',
        component: Register // Ruta de registro
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router;
