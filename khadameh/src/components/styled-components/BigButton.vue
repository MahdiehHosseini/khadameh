<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps(['text', 'subText', 'link'])

</script>


<template>
    <span>
        <button type="submit" class="focus:outline-none text-white w-full bg-green-700 py-2.5 font-medium text-center rounded-full">{{ props.text}}</button>
        <RouterLink :to="link" :class="[ 'font-medium', 'black', 'mt-3', 'block', 'text-center']">{{ props.subText }}</RouterLink>
    </span>
</template>