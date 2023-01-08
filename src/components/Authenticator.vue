<script setup>
import { ref } from "@vue/reactivity";
import Login from "./Login.vue";
import SignUp from "./SignUp.vue";

let toggleForm = ref(true);

let slides = ref([
    "/img/banner-bg2.png",
    // "/img/banner-bg1.png",
    // "/img/banner-bg3.png",
]);
</script>

<template>
    <v-container class="mt-6">
        <div class="d-flex justify-center justify-md-space-evenly">
            <div class="banner-bg">
                <img src="/img/banner-bg2.png" alt="" />
            </div>
            <div class="form-container">
                <div class="d-flex flex-column align-center">
                    <div class="card text-center">
                        <img src="/img/logo.png" class="logo-img my-4" alt="" />
                        <div v-if="toggleForm">
                            <Login></Login>
                        </div>
                        <div v-else>
                            <SignUp></SignUp>
                        </div>
                    </div>
                    <div class="card text-center">
                        <p>
                            <span v-if="toggleForm">
                                Don't have an account?
                            </span>
                            <span v-else> Already have an account? </span>
                            <span
                                class="cp text-blue font-weight-bold"
                                @click="toggleForm = !toggleForm"
                            >
                                <span v-if="toggleForm"> Sign up </span>
                                <span v-else> Sign in </span>
                            </span>
                        </p>
                    </div>
                    <div class="text-center mt-3">
                        <p>Get the app.</p>
                        <router-link to="#">
                            <img
                                src="/img/store.png"
                                class="store-img"
                                alt=""
                            />
                        </router-link>
                        <router-link to="#">
                            <img
                                src="/img/gstore.png"
                                class="store-img"
                                alt=""
                            />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <footer class="text-center mt-6">
            <p class="text-grey">© 2023 Instagram from Meta</p>
        </footer>
    </v-container>
</template>

<style lang="scss">
.logo-img {
    width: 10rem;
}
.banner-bg {
    flex-basis: 380.32px;
    align-self: center;
    background: url("/img/banner.png") no-repeat;
    background-size: 468.32px 634.15px;
    background-position: -46px 0;
    height: 581.15px;
    margin: 0 4rem 2rem 0;
    position: relative;
    overflow: hidden;

    img {
        height: 538.84px;
        position: absolute;
        top: 1.65rem;
        right: 1.15rem;
        width: 250px;
        // height: 100%;
    }
}
@media screen and (max-width: 860px) {
    .banner-bg {
        display: none !important;
    }
}
.form-container {
    flex-grow: 1;
    max-width: 350px;
}
</style>
