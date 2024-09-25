<script setup lang="ts">
import { ref, defineProps } from 'vue';

import BigButton from '../styled-components/BigButton.vue'


const props = defineProps(['desText'])

const code = ref('')

const submitData = () => {
    
}

</script>


<template>
    <div class="w-full h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ props.desText }}</p>
        <form class="text-black flex flex-col justify-between w-full h-full" @submit.prevent="submitData">
            <span>
                <!-- <input /> -->
            </span>
            <BigButton text="تایید" subText="ارسال مجدد" link="/newpassword" />
        </form>
    </div>
</template>