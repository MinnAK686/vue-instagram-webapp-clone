import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../supabase";
import { validateEmail } from "../composables/validateEmail";

export const useUserStore = defineStore("users", () => {
    let user = ref(null);
    let errorMsg = ref(null);
    let handleSignUp = async (credentials) => {
        const { email, password, fullname, username } = credentials;

        // Validate in front-end
        if (!validateEmail(email)) {
            return (errorMsg.value = "Invalid email format");
        }
        if (password.length < 6) {
            return (errorMsg.value = "Password must be at least 6 characters");
        }
        errorMsg.value = null;

        // Validate with server
        let { data: checkUsername, error: userNameErr } = await supabase
            .from("users")
            .select()
            .eq("username", username)
            .single();
        if (userNameErr) console.clear();
        if (checkUsername) {
            return (errorMsg.value = "Username already taken by another user");
        }

        let { error } = await supabase.auth.signUp({ email, password });
        if (error) {
            return (errorMsg.value = error.message);
        }
        errorMsg.value = null;

        // Insert user info into database
        await supabase.from("users").insert({ email, fullname, username });

        let { data: currentUser } = await supabase.auth.getUser();

        let { data: newUser } = await supabase
            .from("users")
            .select()
            .eq("email", currentUser.user.email)
            .single();

        user.value = {
            id: newUser.id,
            email: newUser.email,
            fullname: newUser.fullname,
            username: newUser.username,
            created_at: newUser.created_at,
        };
        errorMsg.value = null;
    };
    let handleLogin = async () => {};
    let handleLogout = async () => {};
    let getUser = async () => {};

    return {
        user,
        errorMsg,
        getUser,
        handleSignUp,
        handleLogin,
        handleLogout,
    };
});
