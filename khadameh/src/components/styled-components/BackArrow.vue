<script setup lang="ts">
import { defineProps } from 'vue'

import arrowRight from '../../assets/icons/arrowRight.svg'

const props = defineProps<{
    text: string
}>()

</script>


<template>
    
    <span class="flex items-center justify-end w-full mb-14">
        <p class="font-medium text-lg">{{ props.text }}</p>
        <img :src="arrowRight" alt="arrow right icon" class=" h-5 ml-1.5 -mt-0.5" />
    </span>

</template>