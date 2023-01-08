import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
    let users = ref(null);
    let handleSignUp = async () => {};
    let handleLogin = async () => {};
    let handleLogout = async () => {};
    let getUser = async () => {};
});
