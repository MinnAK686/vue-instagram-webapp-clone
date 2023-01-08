<script setup>
let props = defineProps(["post"]);
</script>

<template>
    <v-card class="mx-auto mb-3" max-width="400">
        <v-img
            class="align-end text-white"
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            cover
        >
        </v-img>

        <v-card-subtitle class="pt-4"> User name </v-card-subtitle>

        <v-card-text>
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange"> Share </v-btn>

            <v-btn color="orange"> Explore </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style></style>
