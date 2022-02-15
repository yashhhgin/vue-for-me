<template>
    <div>
        <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isModelOpen = true">Add User</button>
        <teleport to="body">
            <Model v-if="isModelOpen" @close="isModelOpen = false">
                <template #title>
                    <h1>Create User</h1>
                </template>
                <template #body>
                    <form @submit.prevent="submit">
                        <div class="p-2">
                            <label>Name</label>
                            <input class="w-full p-2 rounded border" placeholder="User First Name" type="text" v-model="state.form.f_name"/>
                        </div>
                        <div class="p-2">
                            <label>Email</label>
                            <input class="w-full p-2 rounded border" placeholder="User Last Name" type="text" v-model="state.form.l_name"/>
                          </div>
                        <div class="p-2">
                            <input class="w-full p-2 rounded border hover:bg-gray-300" type="submit" value="Create"/>
                        </div>
                    </form>
                </template>
            </Model>
        </teleport>
    </div>
</template>

<script>
    import Model from './../Model'
    import axios from '../../plugins/axios'
    import { ref,reactive } from 'vue'
    export default {
        components:{Model},
        setup(_, {emit}){
            const isModelOpen = ref(false);
            const state = reactive({
                form:{
                    f_name:'',
                    l_name:''
                }
            });

            async function submit(){
                const ff = await axios.post('insert',state.form)
                isModelOpen.value = false;
                emit('new-user-add',ff.data.data);
            }

            return {state,submit,isModelOpen}
        }
    }

</script>
