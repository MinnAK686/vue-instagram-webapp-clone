<script setup>
let props = defineProps(["posts"]);
</script>
<template>
    <div class="user-gallery">
        <img
            v-for="post in props.posts"
            :key="post.id"
            :src="post.img"
            alt=""
        />
    </div>
</template>

<style lang="scss">
.user-gallery {
    img {
        width: 227px;
        height: 227px;
        object-fit: cover;
        margin: 1rem;
    }
}

@media screen and (max-width: 825px) {
    .user-gallery {
        img {
            width: 190px;
            height: 190px;
        }
    }
}
@media screen and (max-width: 715px) {
    .user-gallery {
        img {
            width: 150px;
            height: 150px;
        }
    }
}
@media screen and (max-width: 420px) {
    .user-gallery {
        img {
            width: 100px;
            height: 100px;
            margin: 0;
        }
    }
}
</style>
