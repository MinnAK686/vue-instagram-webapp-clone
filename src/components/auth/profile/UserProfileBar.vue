<script setup></script>

<template>
    <div class="user-profile-bar">
        <h1>User name here</h1>
        <div class="d-sm-flex justify-space-between align-center d-block">
            <div class="d-flex">
                <div>
                    <h3>133 posts</h3>
                </div>
                <div>
                    <h3>2045 followes</h3>
                </div>
                <div>
                    <h3>456 following</h3>
                </div>
            </div>
            <div class="my-5 my-sm-0">
                <v-btn flat color="indigo"> Upload Image </v-btn>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.user-profile-bar {
    padding-bottom: 3rem;
    h3 {
        font-weight: bold;
        margin-right: 1.2rem;
    }
}
</style>
