import { createApp ,markRaw} from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
//import router from "./router/index.js";


import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
import ConfirmationService from 'primevue/confirmationservice';
import BadgeDirective from 'primevue/badgedirective';
import FocusTrap from 'primevue/focustrap';
import DialogService from 'primevue/dialogservice';
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";

//import vue3GoogleLogin from 'vue3-google-login'
// import GSignInButton from 'vue-google-signin-button'

// import 'primevue/resources/themes/lara-light-indigo/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';


// import '@gcba/obelisco'

import Tooltip from 'primevue/tooltip';
//core
//import "primevue/resources/primevue.min.css";

//theme

const pinia = createPinia()

const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID

// pinia.use(({store}) =>{
//     store.router = markRaw(router)
// })
pinia.use(piniaPluginPersistedstate )

const app = createApp(App)

app.use(pinia)
    //.use(router)
    .use(ToastService)
    .use(ConfirmationService)
    .use(BadgeDirective)
    .use(DialogService)
    // .use(vue3GoogleLogin,{
    //     clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
    // })
    .use(PrimeVue,
        {
            locale: {
                noFilter: 'Sin Filtro',
                dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
                dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
                monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                today: 'Hoy',
                weekHeader: 'Sem',
                firstDayOfWeek: 1,
                dateFormat: 'dd/mm/yy',
                aria : {pageLabel:'ES'},
                apply: 'Aceptar',
                clear: 'Limpiar',
                dateAfter: 'Fecha Posterior',
                dateBefore: 'Fecha Anterior',
                dateIs: 'Fecha Igual',
                dateIsNot: 'Fecha Distinta',
                accept: 'Aceptar',
                reject: 'Rechazar',
                choose: 'Elegir',
                upload: 'Subir',
                cancel: 'Cancelar',
                fileSizeTypes: ['B','KB','MB','GB','TB'],
            }
        }
    )
    .directive('focustrap', FocusTrap)
    .directive('tooltip', Tooltip)
     // .component('Buttom',Button)
    .component("Toast", Toast)
    .component('Dropdown',Dropdown)
    .mount('#app');

app.component('Buttom',Button);

