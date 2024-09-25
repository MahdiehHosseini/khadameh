<script setup lang="ts">

import TButton from '@components/TButton.vue';
import TInputMobile from '@@/components/TInputMobile.vue'
import TInputPassword from '@@/components/TInputPassword.vue'

import { API_Login_output } from '../../datasource/API/LoginApi'


const props = defineProps<{
    desText: string
}>()

const loginData = reactive<API_Login_output>({
    phoneNumber: null,
    password: ''
})

const submitData = () => {
    
}


</script>


<template>
    <div class="w-full flex flex-col items-center h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ props.desText }}</p>
        <form class="text-black flex flex-col justify-between w-full h-full" @submit.prevent="submitData">
            <span dir="ltr">
                <!-- <TInputMobile /> -->
                 <TInputPassword class="mt-3" />
            </span>
            <div class="w-full text-center">
                <TButton class="w-full mb-3" color="success" btnCorners="curve" size="large" styleType="text" >تایید</TButton>
                <RouterLink class=" text-black font-medium text-base" to="/changepassword">فراموشی رمز عبور</RouterLink>
            </div>
        </form>
    </div>
</template>