<template>
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Login</h1>

              <GoogleLogin @close-popup-google-login="close"/>

            <p class="my-3 text-center">Or</p>

            <form class="p-2 my-2" @submit.prevent="submit()">
                <div class="my-4">
                    <label>Email or Username</label>
                    <input v-model="form.email" class="rounded shadow p-2 w-full" placeholder="Enter your email or username"/>
                </div>
                <div class="my-4">
                    <label>Password</label>
                    <input v-model="form.password" class="rounded shadow p-2 w-full" type="password" placeholder="enter your password"/>
                </div>
                <div class="my-4">
                    <button
                        type="submit"
                        class="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2">
                      <span v-if="!isLoading">Login</span>
                      <span v-else>⌛</span>
                    </button>
                </div>
            </form>

          </div>
        </div>
      </div>
    </div>
</template>

<script>

import '../utilities/firebase';
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import GoogleLogin from "./Login/GoogleLogin";

export default {
    components:{GoogleLogin},
    data() {
        return {
            form:{
               email:'yash@gmail.com',
                password:'password'
            },
            isLoading:false
        };
    },
    methods:{
        submit(){
          this.isLoading = true
          const auth = getAuth();

          signInWithEmailAndPassword(auth,this.form.email,this.form.password)
                .then(res => {
                    this.isLoading = false;
                    this.close();
                    console.log(res)
                }).catch(e => {
                    this.isLoading = false;
                    console.log(e);
                })
        },
        close(){
            this.$emit('close-login');
        }
    }
};

</script>

<style></style>
