import LogIn from "@/views/auth/LogIn.vue";
import Register from "@/views/auth/Register.vue";
//import LogIn from "../views/auth/LogIn.vue";



export default [
    // {
    //     path: "/login",
    //     name: "Login",
    //     component: LogIn
    // },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/login",
        name: "Register",
        component: LogIn
    }
];
