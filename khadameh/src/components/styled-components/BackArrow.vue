<script setup lang="ts">
import { defineProps } from 'vue'

import TIcon from '@@/components/TIcon.vue'

const props = defineProps<{
    text: string,
    link: string
}>()

</script>


<template>
    
    <RouterLink :to="link" class="flex items-center w-full mb-56px">
         <TIcon src="@icons/b-arrow-right-2.svg" class="w-5 h-5 ml-2" />
        <p class="font-medium text-lg">{{ props.text }}</p>
    </RouterLink>

</template>