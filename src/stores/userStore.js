import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null, // Estado inicial del usuario
    }),
    persist: true,
    getters: {
        isAuthenticated: (state) => !!state.user, // Retorna true si el usuario está autenticado
    },
    actions: {
        setUser(userData) {
            this.user = userData; // Actualiza el estado del usuario
        },
        logout() {
            this.user = null; // Limpia el estado
        }
    }
});