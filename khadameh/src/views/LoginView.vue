<script setup lang="ts">

import LoginSlider from '@/components/Sliders/LoginSlider.vue'
import LoginHeader from '@/components/headers/LoginHeader.vue'
import LoginForm from '@/components/forms/LoginForm.vue'

</script>

<template>
    <div class="flex w-full h-screen justify-center items-center 2xl:p-24">
        <section class=" flex w-full md:(w-1/2 mx-40 py-16 ) h-full flex-col items-center pt-10 pb-8 xl:w-1/2">
            <LoginHeader subText="آستان قدس رضوی" mainText="سامانه جامع اطلاعات و آمار" />
            <LoginForm />
        </section>
        <LoginSlider />
    </div>
</template>