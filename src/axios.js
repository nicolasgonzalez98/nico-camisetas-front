import axios from 'axios';
import  {userAuthStore} from "./Modules/Auth/store/auth.js";
import {computed} from "vue";
import axiosAuth from "./axiosAuth.js";
import router from "./router/index.js";

axios.defaults.withCredentials = true

const base_url = computed( () => {
    switch (location.hostname) {
        case '172.172.122.221':
            return import.meta.env.VITE_URL_HML
            break
        case 'comedores.bue.edu.ar':
            return import.meta.env.VITE_URL_PROD
            break
        default:
            return import.meta.env.VITE_URL_DEV
            break

    }
})


axiosAuth.defaults.headers.common['Accept'] = 'application/json'
axiosAuth.defaults.headers.common['Content-Type'] = 'application/json'
axiosAuth.defaults.headers.common['X-Requested-with'] = 'XMLHttpRequest'

axiosClient.interceptors.request.use(config =>{
    const userStore = userAuthStore();
    config.headers.Authorization = 'Bearer ' + userStore.authToken;

    return config;
})

axiosClient.interceptors.response.use(null, function (error) {

    // Si no esta autenticado o se vencio el token se hace un redirect al login
    if (error.response.status === 401){
        router.push('/login')
    }
    return Promise.reject(error);
})
export default axiosClient
