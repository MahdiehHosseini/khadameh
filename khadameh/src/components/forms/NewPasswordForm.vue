<script setup lang="ts">

import TButton from '@components/TButton.vue';
import TInputPassword from '@components/TInputPassword.vue'

const submitData = () => {
    
}

</script>


<template>
    <div class="w-full flex flex-col items-center h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ `لطفا رمز عبور جدید خود را وارد کنید، رمز باید شامل اعداد و حروف انگلیسی و یک کاراکتر خاص ( !#$%@ ) باشد.` }}</p>
        <form class="text-black flex flex-col justify-between w-full h-5/6" @submit.prevent="submitData">
            <span dir="ltr">
                <TInputPassword label="رمز عبور جدید" dir="rtl"  />
                <TInputPassword label="تکرار رمز عبور جدید" dir="rtl"  class="mt-3" />
            </span>
            <TButton color="success" btnCorners="curve" size="large" styleType="text" >ورود به سامانه</TButton>
        </form>
    </div>
</template>