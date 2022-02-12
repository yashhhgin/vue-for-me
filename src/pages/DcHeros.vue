<template>
    <div class="m-auto">
        <h1 class="text-2xl text-center">Dc Heros {{ herosCount }}</h1>
        <ul>
            <li class="flex justify-between" v-for="(hero, index) in dcHeros" :key="hero.name">
                <div>
                    {{ hero.name }}
                </div>
                <button v-on:click="remove(index)">x</button>
            </li>
        </ul>
        <form class="mt-10" @submit.prevent="addHero()">
            <input ref="dcHerosRef" class="border rounded" v-model="newHero" placeholder="Type Hero Name Here"/>
            <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
        </form>
    </div>
</template>

<script>

import { ref,onMounted,computed } from 'vue';

export default {
  setup() {

    const newHero = ref('');
    const dcHerosRef = ref('');

    const dcHeros = ref([
                      { name: "SuperGirl" },
                      { name: "Flash" },
                      { name: "Batman" },
                      { name: "Arrow" },
                      { name: "SuperMan" },
                  ]);

    function remove(index) {
        dcHeros.value = dcHeros.value.filter((hero, i) => i != index);
    }

    function addHero() {
        if (newHero.value !== "") {
          dcHeros.value.unshift({ name: newHero.value });
          newHero.value = "";
        }
    }

    const herosCount = computed({
        get:() => dcHeros.value.length
    })

    onMounted(() => {
      dcHerosRef.value.focus();
    });

    return {
       dcHeros , remove , addHero , newHero , dcHerosRef , herosCount
    }
  }
};
</script>

<style>
</style>