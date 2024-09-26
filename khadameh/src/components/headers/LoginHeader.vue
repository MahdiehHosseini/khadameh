<script setup lang="ts">
import khadameLogo from '@/assets/images/khadameh.png'

import { defineProps } from 'vue'

const props = defineProps<{
    subText: string,
    mainText: string
}>()

</script>

<template>
    <header class="flex flex-col items-center">
        <img alt="khadameh logo" class="w-96px" :src="khadameLogo" width="397" height="397" />
        <span class=" text-center mt-4 mb-6 text-green-700">
            <h1 class=" text-lg font-semibold">{{ props.mainText }}</h1>
            <p class="font-medium text-medium opacity-75">{{ props.subText }}</p>
        </span>
    </header>
</template>