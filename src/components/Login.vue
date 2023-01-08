<script setup></script>

<template>
    <form>
        <input
            type="text"
            class="form-control"
            placeholder="Phone number, username or email"
        />
        <input type="password" class="form-control" placeholder="Password" />
        <v-btn block class="text-capitalize my-3" color="blue"> Log in </v-btn>
    </form>
    <div>
        <p class="text-grey">OR</p>
        <p
            prepend-icon="mdi-facebook"
            class="cp text-blue text-blue-darken-2 font-weight-bold my-3"
        >
            <v-icon aria-hidden="false"> mdi-facebook </v-icon>
            Log in with Facebook
        </p>
        <span class="cp text-blue text-blue-darken-3">Forgot password?</span>
    </div>
</template>

<style></style>
