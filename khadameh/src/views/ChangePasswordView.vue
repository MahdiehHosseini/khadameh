<script setup lang="ts">

import LoginSlider from '../components/Sliders/LoginSlider.vue'
import LoginHeader from '../components/headers/LoginHeader.vue'
import ChangePasswordForm from '../components/forms/ChangePasswordForm.vue'
import BackArrow from '../components/styled-components/BackArrow.vue'

const desText = `کد ارسال شده به شماره تلفن ${88} را وارد کنید` 

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen 2xl:p-24">
        <LoginSlider />
        <section class=" flex md:w-1/2 w-full h-full flex-col items-center pt-10 md:pt-16 pb-8 md:py-34 2xl:py-14 2xl:mx-52 md:mx-40 xl:w-1/2">
            <BackArrow text="بازگشت" />
            <LoginHeader subText="" mainText="فراموشی رمز عبور" />
            <ChangePasswordForm :desText="desText" />
        </section>
    </div>
</template>