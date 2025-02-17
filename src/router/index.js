import {createRouter, createWebHistory} from "vue-router";
import routesAuth from './authRouter.js'
import routesShop from './shopRouter.js'

var allRoutes = []

const routes = allRoutes.concat(routesAuth, routesShop)


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
