<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue';

import BigButton from '../styled-components/BigButton.vue'

import visable from '../../assets/icons/visable.svg'
import notVisable from '../../assets/icons/notVisable.svg'


const props = defineProps(['desText'])

const newPassword = reactive({
    newPassword: '',
    repeatNewPassword: ''
})

const newPasswordVisablity = ref(true)
const repeatNewPasswordVisablity = ref(true)

const submitData = () => {
    
}

const toggleNewPasswordVisability = () => {
    newPasswordVisablity.value = !newPasswordVisablity.value
}

const toggleRepeatNewPasswordVisability = () => {
    repeatNewPasswordVisablity.value = !repeatNewPasswordVisablity.value
}

</script>


<template>
    <div class="w-full h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ props.desText }}</p>
        <form class="text-black flex flex-col justify-between w-full h-full" @submit.prevent="submitData">
            <span>
                <div class=" flex items-center w-full mt-3">
                    <span class="border rounded-lg border-r-0 w-12 p-2 rounded-r-0" @click="toggleNewPasswordVisability" >
                        <img alt="visable icon" :src="visable" :class="['opacity-50', 'h-5', { 'hidden': !newPasswordVisablity}]"/>
                        <img alt="not visable icon" :src="notVisable" :class="['opacity-50', 'h-5', { 'hidden': newPasswordVisablity}]"/>
                    </span>
                    <input :type="newPasswordVisablity ? 'text' : 'password'" v-model="newPassword.newPassword" class="bg-transparent focus:outline-none border rounded-lg p-2 text-sm font-light border-l-0 rounded-l-0 w-full" dir="rtl" placeholder=" رمز عبور جدید" />
                </div>
                <div class=" flex items-center w-full mt-3">
                    <span class="border rounded-lg border-r-0 w-12 p-2 rounded-r-0" @click="toggleRepeatNewPasswordVisability" >
                        <img alt="visable icon" :src="visable" :class="['opacity-50', 'h-5', { 'hidden': !repeatNewPasswordVisablity}]"/>
                        <img alt="not visable icon" :src="notVisable" :class="['opacity-50', 'h-5', { 'hidden': repeatNewPasswordVisablity}]"/>
                    </span>
                    <input :type="repeatNewPasswordVisablity ? 'text' : 'password'" v-model="newPassword.repeatNewPassword" class="bg-transparent focus:outline-none border rounded-lg p-2 text-sm font-light border-l-0 rounded-l-0 w-full" dir="rtl" placeholder="تکرار رمز عبور جدید" />
                </div>
            </span>
            <BigButton text="ورود به سامانه" subText="" link="" />
        </form>
    </div>
</template>