<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2">
        <router-link v-for="item in list" :key="item.to" class="mx-2" :to="item.to">{{ item.title }}</router-link>
        <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-model')">Login</button>
        <button v-else class="mx-2" @click="logout()">Logout</button>
    </nav>
</template>

<script>

import '../utilities/firebase';
import { getAuth,signOut } from "firebase/auth";

export default {
    props:{
      isLoggedIn:{
        type:Boolean,
        require:true
      }
    },
    data() {
        return {
            list: [
                { title: "Dc Heros", to: "/dc-heros" },
                { title: "Calendar", to: "/calendar" },
                { title: "Markdown", to: "/markdown" },
                { title: "Slider Carousel", to: "/slider" },
                { title: "Calculator", to: "/calculator" },
                { title: "Reusable Model", to: "/reusable-model" },
                { title: "User-List", to: "/users-list" }
            ],
        }
    },
    methods:{
        logout(){
            const auth = getAuth();
            signOut(auth).then((res) => {console.log(res)})
        }
    }
};

</script>

<style></style>
