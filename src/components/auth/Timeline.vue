<script setup>
import { ref } from "@vue/reactivity";
import Posts from "./Posts.vue";

let posts = ref([
    {
        userName: "Minx Ar Kar",
        images: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        caption:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut eligendi rerum cupiditate sint praesentium exercitationem non labore suscipit alias.",
    },
    {
        userName: "John",
        images: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        caption:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut eligendi rerum cupiditate sint praesentium exercitationem non labore suscipit alias.",
    },
    {
        userName: "TESTER",
        images: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        caption:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aut eligendi rerum cupiditate sint praesentium exercitationem non labore suscipit alias.",
    },
]);
</script>

<template>
    <v-container>
        <Posts v-for="post in posts" :key="post.id" :post="post"></Posts>
    </v-container>
</template>

<style></style>
