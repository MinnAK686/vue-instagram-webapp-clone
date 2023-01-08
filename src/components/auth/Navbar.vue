<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

let router = useRouter();
let loading = ref(false);
let loaded = ref(false);
let searchUser = ref("");
let onClick = () => {
    loading.value = true;
    if (searchUser.value) {
        router.push(`/profile/${searchUser.value}`);
    }
    setTimeout(() => {
        loading.value = false;
        loaded.value = true;
    }, 2000);
};
let dialog = ref(false);
let logout = async () => {
    console.log("loggedout");
};
</script>

<template>
    <v-card color="grey-lighten-4" flat rounded="0">
        <v-toolbar density="compact" class="py-3">
            <v-app-bar-nav-icon
                @click="dialog = true"
                class="d-block d-sm-none"
            ></v-app-bar-nav-icon>

            <v-toolbar-title>
                <router-link to="/" class="text-black text-decoration-none"
                    >Instagram</router-link
                >
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div class="d-none d-sm-flex align-center">
                <div>
                    <v-text-field
                        :loading="loading"
                        density="compact"
                        variant="solo"
                        label="Search User"
                        append-inner-icon="mdi-magnify"
                        single-line
                        hide-details
                        color="red"
                        v-model="searchUser"
                        @click:append-inner="onClick"
                        style="width: 200px"
                        class="mx-3"
                    ></v-text-field>
                </div>
                <v-btn icon router :to="`/profile/autheduser`">
                    <v-icon>mdi-account</v-icon>
                    <v-tooltip activator="parent" location="bottom">
                        Profile
                    </v-tooltip>
                </v-btn>
            </div>

            <v-btn prepend-icon="mdi-logout" @click="logout"> Logout </v-btn>
        </v-toolbar>
    </v-card>
    <div class="text-center">
        <v-dialog v-model="dialog">
            <v-card class="px-3 py-6">
                <div class="d-flex flex-column align-center">
                    <div>
                        <v-text-field
                            :loading="loading"
                            density="compact"
                            variant="solo"
                            label="Search templates"
                            append-inner-icon="mdi-magnify"
                            single-line
                            hide-details
                            color="red"
                            v-model="searchUser"
                            @click:append-inner="onClick"
                            style="width: 290px"
                            class="mx-auto mb-6"
                        ></v-text-field>
                    </div>
                    <div>
                        <v-btn icon router :to="`/profile/autheduser`">
                            <v-icon>mdi-account</v-icon>
                            <v-tooltip activator="parent" location="right">
                                Profile
                            </v-tooltip>
                        </v-btn>
                    </div>
                </div>
                <v-card-actions>
                    <v-btn color="primary" block @click="dialog = false"
                        >Close
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
