<template>
    <section class="flex flex-wrap w-full">
      <div class="m-auto">
          <h1 class="text-2xl my-5">Re-useable Modal</h1>

<!--            <button class="border rounded px-2 mx-4 bg-blue-500 text-white">Modal 1</button>-->
            <Modal v-if="isRedShowModal" @close="isRedShowModal = false">
                <template #title>
                    <h1>This is a title for model 1.</h1>
                </template>
                <template #body>
                    <p>This is a body for model 1.</p>
                </template>
            </Modal>
            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isRedShowModal = true">Red Model</button>

            <Modal v-if="isBlueShowModal" @close="isBlueShowModal = false">
                <template v-slot:title>
                  <h1>This is a title for model 2.</h1>
                </template>
                <template v-slot:body>
                  <p>This is a body for model 2.</p>
                </template>
            </Modal>
            <button class="border rounded px-2 mx-4 bg-blue-500 text-white" @click="isBlueShowModal = true">Blue Model</button>
        </div>
    </section>
</template>

<script>
    import Modal from './../components/Model';
    import {ref} from 'vue';
    export default {
        components:{Modal},
        setup(){
            const isRedShowModal = ref(false);
            const isBlueShowModal = ref(false);

            return {
                isRedShowModal, isBlueShowModal
            }
        }
    }

</script>
