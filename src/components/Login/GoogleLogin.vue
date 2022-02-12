<template>
    <section class="mt-5 text-center">
        <button class="border px-2 rounded" @click="loginWithGoogle">
          Login With Google
        </button>
    </section>
</template>

<script>

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

    export default {
        methods:{
            loginWithGoogle(){
                const auth = getAuth();
                signInWithPopup(auth,new GoogleAuthProvider())
                    .then(() => {
                        this.$emit('close-popup-google-login');
                    });
            }
        }
    }

</script>