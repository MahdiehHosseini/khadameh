<script setup lang="ts">

import LoginSlider from '../components/Sliders/LoginSlider.vue'
import LoginHeader from '../components/headers/loginHeader.vue'
import LoginForm from '../components/forms/LoginForm.vue'

</script>

<template>
    <div class="flex w-full h-screen 2xl:p-24">
        <LoginSlider />
        <section class=" flex w-full flex-col items-center pt-16 pb-8 md:py-34 2xl:py-14 xs:mx-32 md:mx-52 2xl:mx-52 md:mx-32 xl:w-1/2">
            <LoginHeader subText="آستان قدس رضوی" mainText="سامانه جامع اطلاعات و آمار" />
            <LoginForm desText="جهت ورود اطلاعات خود را وارد کنید" />
        </section>
    </div>
</template>