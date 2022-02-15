<template>
    <div class="m-auto">
        <div>
            <h1>User Crud</h1>
            <Create @new-user-add="addUser"></Create>
            <table>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
                <tr v-for="(list,index) in state.users" :key="index">
                    <td>{{ list.id }}</td>
                    <td>{{ list.f_name }}</td>
                    <td>{{ list.l_name }}</td>
                    <td>{{ list.created_at }}</td>
                    <td><button @click.once="deleteUser(list.id)">Delete</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Create from '../components/UserCrud/Create'
    import axios from '../plugins/axios'
    import { reactive,onMounted } from 'vue'
    export default {
        components:{Create},
        setup(){

            const state = reactive({
                users:[]
            });

            onMounted(async () => {
                const {data} = await axios.get(`data`);
                state.users = data;
            });

            async function deleteUser(id){
                state.users = state.users.filter((i) => i.id != id)
                await axios.post('delete',{id:id});
            }

            async function addUser(data){
                state.users.push(data)
            }

            return { state,deleteUser,addUser }
        }
    }
</script>
