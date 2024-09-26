<script setup lang="ts">

import LoginSlider from '@/components/Sliders/LoginSlider.vue'
import LoginHeader from '@/components/headers/loginHeader.vue'
import NewPasswordForm from '@/components/forms/NewPasswordForm.vue'
import BackArrow from '@/components/styled-components/BackArrow.vue'

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen">
        <div class="w-full 2xl:w-5/6 flex w-full justify-center items-center h-full">
            <section class=" flex md:(w-1/2 py-16 mx-40) w-full h-full flex-col items-center pt-10 pb-8 xl:w-1/2">
                <BackArrow text="بازگشت" link="/login" />
                <span class="flex flex-col items-center justify-center h-full w-full">
                    <LoginHeader subText="" mainText="بازنشانی رمز عبور" />
                    <NewPasswordForm />
                </span>
            </section>
            <LoginSlider />
        </div>
    </div>
</template>