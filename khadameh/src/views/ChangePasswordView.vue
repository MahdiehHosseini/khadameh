<script setup lang="ts">

import LoginSlider from '../components/Sliders/LoginSlider.vue'
import LoginHeader from '../components/headers/loginHeader.vue'
import ChangePasswordForm from '../components/forms/ChangePasswordForm.vue'

const desText = `کد ارسال شده به شماره تلفن ${88} را وارد کنید` 

</script>

<template>
    <div class="flex w-full h-screen 2xl:p-24">
        <LoginSlider />
        <section class=" flex w-full flex-col items-center pt-16 pb-8 md:py-34 2xl:py-14 2xl:mx-52 md:mx-32 xl:w-1/2">
            <LoginHeader subText="" mainText="فراموشی رمز عبور" />
            <ChangePasswordForm :desText="desText" />
        </section>
    </div>
</template>