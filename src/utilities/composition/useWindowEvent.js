import {onMounted,onUnmounted} from 'vue';

export default function useWindowEvent(event,handle){

    onMounted(() => window.addEventListener(event,handle));

    onUnmounted(() => window.removeEventListener(event,handle));

}