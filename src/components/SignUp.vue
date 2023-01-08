<script setup></script>

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
        <form>
            <input type="email" class="form-control" placeholder="Email" />
            <input type="text" class="form-control" placeholder="Full Name" />
            <input type="text" class="form-control" placeholder="Username" />
            <input
                type="password"
                class="form-control"
                placeholder="Password"
            />
            <v-btn color="blue" block class="my-3"> Sign up </v-btn>
        </form>
    </div>
</template>

<style></style>
