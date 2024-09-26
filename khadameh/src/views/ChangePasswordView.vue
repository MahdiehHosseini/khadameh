<script setup lang="ts">

import LoginSlider from '@/components/Sliders/LoginSlider.vue'
import LoginHeader from '@/components/headers/LoginHeader.vue'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm.vue'
import BackArrow from '@/components/styled-components/BackArrow.vue'

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen">
        <div class="flex w-1300px justify-center h-full items-center ">
            <section class=" flex md:w-1/2 md:mx-40 md:py-64px w-full h-full flex-col justify-center pt-10 pb-8">
                <BackArrow text="بازگشت" link="/login" />
                <span class="flex flex-col items-center justify-center h-full w-full">
                    <LoginHeader subText="" mainText="فراموشی رمز عبور" />
                    <ChangePasswordForm />
                </span>
            </section>
            <LoginSlider />
        </div>
    </div>
</template>