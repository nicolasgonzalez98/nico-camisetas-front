import {defineStore} from "pinia";
import axiosAuth from "../axiosAuth.js";
import axios from "axios";
//import {show_alerta} from "../functions.js";

export const userAuthStore = defineStore('auth',{
    state: () => ({
        _authUser: null,
        _authToken: null,
        _authErrors: null
    }),
    getters: {
        authUser: (state) => state._authUser,
        authToken: (state) => state._authToken,
        errors: (state) => state._authErrors
    },
    actions: {
        async register(formData) {
            this._authErrors = null; // Limpiar errores previos

            try {
                const response = await axiosAuth.post('http://127.0.0.1:8000/api/register', formData);
                this._authUser = response.data.user;
            } catch (error) {
                if (error.response) {
                    this._authErrors = error.response.data.errors || error.response.data.message;
                } else {
                    console.error('Error desconocido:', error);
                }
            }
        },
        async logIn(formData){
            this._authErrors = null;
            console.log("entre")

            try {
                const response = await axiosAuth.post('http://127.0.0.1:8000/api/login', formData);

                this._authUser = response.data.user;
                this._authToken = response.data.token;

                // Guardar el token en localStorage (opcional)
                localStorage.setItem('auth_token', response.data.token);
                console.log("Usuario loggeado")
            } catch (error) {
                if (error.response) {
                    this._authErrors = error.response.data.errors || error.response.data.message;
                } else {
                    console.error('Error desconocido:', error);
                }
            }
        },
        async logOut() {
            
            try {
                await axios.post('http://127.0.0.1:8000/api/logout', {}, {
                    headers: {
                        Authorization: `Bearer ${this._authToken}`
                    },
                    withCredentials:true
                });
        
                this._authUser = null;
                this._authToken = null;
        
                localStorage.removeItem('auth_token'); // Elimina el token almacenado
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        }        
    }  

})

