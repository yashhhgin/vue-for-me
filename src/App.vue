<template>
  <AppHeader @open-login-model="isLoginOpen = true" :isLoggedIn="isLoggedIn"/>
  <div class="w-full flex">
    <router-view></router-view>
  </div>

    <teleport to="body">
        <LoginModel v-if="isLoginOpen" @close-login="isLoginOpen = false"/>
    </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModel from './components/LoginModel'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    components:{
      LoginModel,
      AppHeader
    },
    data(){
        return {
            isLoginOpen:false,
            isLoggedIn:false,
            authUser:{}
        }
    },
    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
              this.isLoggedIn = true;
              this.authUser = user;
            }else{
              this.isLoggedIn = false;
              this.authUser = {};
            }
        });
    }
};
</script>

<style></style>
