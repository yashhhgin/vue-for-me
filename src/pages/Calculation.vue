<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div>
              <h1 class="text-3xl text-center">Calculator</h1>
              <small>You can fully use keyboard to calculate</small>
            </div>
            <p class="text-right border mt-10 w-56 h-10" style="direction:rtl">{{ currentNum }}</p>
            <div class="h-10">
              <small v-if="opration">{{ prevNum }} {{ opration }} {{ currentNum }}</small>
            </div>
            <div class="grid grid-cols-4 gap-1">
                <button @click="pressed('1')" class="p-2 w-10 h-10 border rounded shadow">1</button>
                <button @click="pressed('2')" class="p-2 w-10 h-10 border rounded shadow">2</button>
                <button @click="pressed('3')" class="p-2 w-10 h-10 border rounded shadow">3</button>
                <button @click="pressed('+')" class="p-2 w-10 h-10 border rounded shadow">+</button>
                <button @click="pressed('4')" class="p-2 w-10 h-10 border rounded shadow">4</button>
                <button @click="pressed('5')" class="p-2 w-10 h-10 border rounded shadow">5</button>
                <button @click="pressed('6')" class="p-2 w-10 h-10 border rounded shadow">6</button>
                <button @click="pressed('-')" class="p-2 w-10 h-10 border rounded shadow">-</button>
                <button @click="pressed('7')" class="p-2 w-10 h-10 border rounded shadow">7</button>
                <button @click="pressed('8')" class="p-2 w-10 h-10 border rounded shadow">8</button>
                <button @click="pressed('9')" class="p-2 w-10 h-10 border rounded shadow">9</button>
                <button @click="pressed('*')" class="p-2 w-10 h-10 border rounded shadow">*</button>
                <button @click="pressed('c')" class="p-2 w-10 h-10 border rounded shadow">C</button>
                <button @click="pressed('0')" class="p-2 w-10 h-10 border rounded shadow">0</button>
                <button @click="pressed('=')" class="p-2 w-10 h-10 border rounded shadow">=</button>
                <button @click="pressed('/')" class="p-2 w-10 h-10 border rounded shadow">/</button>
            </div>
        </div>
    </section>
</template>

<script>

    import { ref } from 'vue';
    import useWindowEvent from "@/utilities/composition/useWindowEvent";

    export default {
        setup(){
            const currentNum = ref("");
            const prevNum = ref("");
            const opration = ref("");
            const oprationList = ref(['+','-','*','/']);
            const numberList = ref(['1','2','3','4','5','6','7','8','9','0','.']);

            function pressed(value){
                if(value === 'c') clear();
                else if(value === "=" || value == "Enter") finalOutput();
                else if(oprationList.value.includes(value) && currentNum.value != '') setOpration(value);
                else if(numberList.value.includes(value)) addNum(value);
            }

            function setOpration(value){
                prevNum.value = currentNum.value;
                currentNum.value = '';
                opration.value = value;
            }

            function addNum(value){
                currentNum.value = currentNum.value == 0 ? '' : currentNum.value;
                currentNum.value = currentNum.value + value;
            }

            function clear(){
                currentNum.value = 0;
                prevNum.value = '';
                opration.value = '';
            }

            function finalOutput(){

                if(opration.value === '+') addition()
                else if(opration.value === '-') subtra()
                else if(opration.value === '*') multipli()
                else if(opration.value === '/') division()

                prevNum.value = '';
                opration.value = '';
            }

            // onMounted(() => window.addEventListener("keydown", handleEvent));
            //
            // onUnmounted(() => window.removeEventListener("keydown",handleEvent));
            const handleEvent = (e) => pressed(e.key);

            useWindowEvent('keydown',handleEvent);



            var addition = () => currentNum.value = +prevNum.value + +currentNum.value;

            var subtra = () => currentNum.value = prevNum.value - currentNum.value;

            var multipli = () => currentNum.value = prevNum.value * currentNum.value;

            var division = () => currentNum.value = prevNum.value / currentNum.value;

            return { currentNum, prevNum, opration, pressed }

        }
    }

</script>