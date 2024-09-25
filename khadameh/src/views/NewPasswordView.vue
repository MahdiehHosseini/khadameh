<script setup lang="ts">

import LoginSlider from '../components/Sliders/LoginSlider.vue'
import LoginHeader from '../components/headers/loginHeader.vue'
import NewPasswordForm from '../components/forms/NewPasswordForm.vue'
import BackArrow from '../components/styled-components/BackArrow.vue'

const desText = `لطفا رمز عبور جدید خود را وارد کنید، رمز باید شامل اعداد و حروف انگلیسی و یک کاراکتر خاص ( !#$%@ ) باشد`

</script>

<template>
    <div class="flex w-full justify-center items-center h-screen 2xl:p-24">
        <section class=" flex md:w-1/2 w-full h-full flex-col items-center pt-10 md:pt-16 pb-8 md:py-34 2xl:py-14  md:mx-40 xl:w-1/2">
            <BackArrow text="بازگشت" link="/login" />
            <span class="flex flex-col items-center justify-center h-full w-full">
                <LoginHeader subText="" mainText="بازنشانی رمز عبور" />
                <NewPasswordForm :desText="desText" />
            </span>
        </section>
        <LoginSlider />
    </div>
</template>