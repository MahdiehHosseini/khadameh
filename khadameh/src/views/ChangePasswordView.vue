<script setup lang="ts">

import LoginSlider from '@/components/Sliders/LoginSlider.vue'
import LoginHeader from '@/components/headers/LoginHeader.vue'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue'
import BackArrow from '@/components/styled-components/BackArrow.vue'

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen 2xl:p-24">
        <section class=" flex md:w-1/2 w-full h-full flex-col items-center pt-10 md:py-16 pb-8 md:mx-40 xl:w-1/2">
            <BackArrow text="بازگشت" link="/login" />
            <span class="flex flex-col items-center justify-center h-full w-full">
                <LoginHeader subText="" mainText="فراموشی رمز عبور" />
                <ChangePasswordForm />
            </span>
        </section>
        <LoginSlider />
    </div>
</template>