import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthenticatorView from "../views/AuthenticatorView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/auth",
            name: "auth",
            component: AuthenticatorView,
        },
        {
            path: "/profile/:username",
            name: "profile",
            component: ProfileView,
        },
    ],
});

export default router;
