<script setup lang="ts">

import LoginSlider from '../components/Sliders/LoginSlider.vue'
import LoginHeader from '../components/headers/loginHeader.vue'
import NewPasswordForm from '../components/forms/NewPasswordForm.vue'

const desText = `لطفا رمز عبور جدید خود را وارد کنید، رمز باید شامل اعداد و حروف انگلیسی و یک کاراکتر خاص ( !#$%@ ) باشد`

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen 2xl:p-24">
        <LoginSlider />
        <section class=" flex w-1/2 h-full flex-col items-center pt-16 pb-8 md:py-34 2xl:py-14  md:mx-40 2xl:mx-52 xs:mx-32 xl:w-1/2">
            <LoginHeader subText="" mainText="بازنشانی رمز عبور" />
            <NewPasswordForm :desText="desText" />
        </section>
    </div>
</template>