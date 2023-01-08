<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useUserStore } from "../store/users";

let users = useUserStore();

let loading = ref(false);
let credentials = reactive({
    email: "",
    password: "",
    fullname: "",
    username: "",
});
let clearLog = () => {
    credentials.email = "";
    credentials.fullname = "";
    credentials.username = "";
    credentials.password = "";
};
let signup = async () => {
    loading.value = true;
    await users.handleSignUp(credentials);
    if (users.user) {
        console.log(users.user);
        clearLog();
    }
    loading.value = false;
};
</script>

<template>
    <div>
        <h3 class="text-grey font-weight-bold">
            Sign up to see photos and videos from your friends.
        </h3>
        <v-btn color="blue" depressed class="my-3">
            <v-icon left> mdi-facebook </v-icon>
            Login with Facebook
        </v-btn>
        <p class="text-grey">OR</p>
        <form @submit.prevent="signup">
            <p class="text-red" v-if="users.errorMsg">{{ users.errorMsg }}</p>
            <input
                type="text"
                class="form-control"
                placeholder="Email"
                v-model="credentials.email"
            />
            <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                v-model="credentials.fullname"
            />
            <input
                type="text"
                class="form-control"
                placeholder="Username"
                v-model="credentials.username"
            />
            <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="credentials.password"
            />
            <v-btn
                type="submit"
                color="blue"
                block
                class="my-3"
                :loading="loading"
                :disabled="
                    !credentials.email ||
                    !credentials.fullname ||
                    !credentials.username ||
                    !credentials.password ||
                    loading
                "
            >
                Sign up
            </v-btn>
        </form>
    </div>
</template>

<style></style>
